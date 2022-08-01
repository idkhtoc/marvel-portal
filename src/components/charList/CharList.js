import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './charList.scss';

const CharList = props => {

    const { loading, error, getAllCharacters, _baseOffset } = useMarvelService();

    const [characters, setCharacters] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(_baseOffset);
    const [charEnded, setCharEnded] = useState(false);

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        setNewItemsLoading(initial ? false : true);

        getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(error => { throw error.message });
    }

    const onCharListLoaded = (newCharacters) => {
        let ended = false;

        if (newCharacters.length < 9) ended = true;

        setCharacters(characters => [...characters, ...newCharacters]);
        setNewItemsLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);
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
        spinner = loading && !newItemsLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {renderItems(characters)}
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