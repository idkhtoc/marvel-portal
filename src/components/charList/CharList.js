import { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {

    marvelService = new MarvelService();

    state = {
        characters: [],
        loading: true,
        error: false,
        newItemsLoading: false,
        offset: this.marvelService._baseOffset,
        characterEnded: false
    };

    currentRefs = [];

    onCharactersLoaded = (newCharacters) => {
        let ended = false;

        if (newCharacters.length < 9) ended = true;

        this.setState(({ offset, characters }) => ({
            characters: [...characters, ...newCharacters],
            loading: false,
            newItemsLoading: false,
            offset: offset + 9,
            characterEnded: ended
        }));
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        });
    }

    setRef = ref => {
        this.currentRefs.push(ref);
    }

    focusOnItem = index => {
        this.currentRefs[index].focus();
    }

    setCharacters = characters => {
        characters = characters.map(({ id, thumbnail, name }, index) => (
            <li
                className="char__item"
                key={id}
                tabIndex={0}
                ref={this.setRef}
                onClick={() => {
                    this.props.onCharSelected(id);
                    this.focusOnItem(index);
                }}
                onKeyPress={e => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        this.props.onCharSelected(id);
                        this.focusOnItem(index);
                    }
                }}
            >
                <img
                    className={thumbnail.includes('image_not_available') ? 'un' : ''}
                    src={thumbnail}
                    alt="character"
                />
                <div className="char__name">{name}</div>
            </li>
        ));

        return (
            <ul className="char__grid">
                {
                    characters
                }
            </ul>
        );
    }

    onRequest = (offset) => {
        this.setState({
            newItemsLoading: true,
        }, () =>
            this.marvelService
                .getAllCharacters(offset)
                .then(this.onCharactersLoaded)
                .catch(this.onError)
        );
    }

    componentDidMount() {
        this.onRequest();
    }

    render() {
        const { characters, loading, error, newItemsLoading, offset, characterEnded } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null,
            spinner = loading ? <Spinner /> : null,
            content = !(loading || error) ? this.setCharacters(characters) : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button
                    className="button button__main button__long"
                    onClick={() => this.onRequest(offset)}
                    disabled={newItemsLoading}
                    style={{ 'display': characterEnded ? 'none' : 'block' }}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;