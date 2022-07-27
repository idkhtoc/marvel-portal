import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = props => {

    const marvelService = new MarvelService();

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(marvelService._baseOffset);
    const [charEnded, setCharEnded] = useState(false);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError);
    }

    const onCharListLoading = () => {
        setNewItemsLoading(true);
    }

    const onCharListLoaded = (newCharacters) => {
        let ended = false;

        if (newCharacters.length < 9) ended = true;

        setCharacters(characters => [...characters, ...newCharacters]);
        setLoading(false);
        setNewItemsLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
    }

    const onError = () => {
        setError(true);
        setLoading(false);
    }

    const itemRefs = useRef([]);

    const focusOnItem = index => {
        itemRefs.current[index].focus();
    }

    const renderItems = chars => {
        chars = chars.map(({ id, thumbnail, name }, index) => (
            <li
                className="char__item"
                key={id}
                tabIndex={0}
                ref={el => itemRefs.current[index] = el}
                onClick={() => {
                    props.onCharSelected(id);
                    focusOnItem(index);
                }}
                onKeyPress={e => {
                    if (e.key === ' ' || e.key === 'Enter') {
                        props.onCharSelected(id);
                        focusOnItem(index);
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
                    chars
                }
            </ul>
        );
    }

    const errorMessage = error ? <ErrorMessage /> : null,
        spinner = loading ? <Spinner /> : null,
        content = !(loading || error) ? renderItems(characters) : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {content}
            <button
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newItemsLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;