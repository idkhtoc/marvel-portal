import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = ({ charId }) => {

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateCharacter()
    }, [charId]);

    const onCharacterLoaded = character => {
        setCharacter(character);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const updateCharacter = () => {
        if (!charId) return;

        setLoading(true);
        marvelService
            .getCharacter(charId)
            .then(onCharacterLoaded)
            .catch(onError);
    }

    const skeleton = character || loading || error ? null : <Skeleton />,
        errorMessage = error ? <ErrorMessage /> : null,
        spinner = loading ? <Spinner /> : null,
        content = !(loading || error || !character) ? <View character={character} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

const View = ({ character }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = character;

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