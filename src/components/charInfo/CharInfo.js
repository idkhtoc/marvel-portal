import { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

class CharInfo extends Component {
    
    state = {
        character: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();

    onCharacterLoaded = (character) => {
        this.setState({
            character, 
            loading: false
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updateCharacter = () => {
        const {charId} = this.props;

        if (!charId) return;
 
        this.setState({
            loading: true,
        }, () => 
            this.marvelService
               .getCharacter(charId)
               .then(this.onCharacterLoaded)
               .catch(this.onError)
        );
    }

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId === prevProps.charId) return;

        this.updateCharacter();
    }

    render() {
        const {character, loading, error} = this.state;

        const skeleton = character || loading || error ? null : <Skeleton/>,
              errorMessage = error ? <ErrorMessage/> : null,
              spinner = loading ? <Spinner/> : null,
              content = !(loading || error || !character) ? <View character={character} /> : null;
        
        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({character}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = character;

    return (
        <>
            <div className="char__basics">
                <img 
                    className={thumbnail.includes('image_not_available') ? 'un' : ''} 
                    src={thumbnail} 
                    alt={name}
                />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length ? null : 'There are no comics for this character'}
                {
                    comics.map((item, index) => (
                        <li className="char__comics-item" key={index}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

CharInfo.propTypes = {
    charId: PropTypes.number,
}

export default CharInfo;