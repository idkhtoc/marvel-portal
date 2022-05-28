import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
    state = {
        characters: [],
        loading: true,
        error: false
    };
    
    marvelService = new MarvelService();

    onCharactersLoaded = (characters) => {
        this.setState({
            characters,
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateCharacters = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharactersLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.updateCharacters();
    }

    render() {
        const {characters, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null,
              spinner = loading ? <Spinner/> : null,
              content = !(loading || error) ? <View characters={characters} /> : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long" onClick={this.updateCharacters}>
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }   
}

const View = ({characters}) => {
    return (
        <ul className="char__grid">
            {
                characters.map(({id, thumbnail, name}) => 
                    <li className="char__item" key={id}>
                        <img className={thumbnail.includes('image_not_available') ? 'un' : ''} src={thumbnail} alt="character"/>
                        <div className="char__name">{name}</div>
                    </li>     
                )
            } 
        </ul>
    );
}

export default CharList;