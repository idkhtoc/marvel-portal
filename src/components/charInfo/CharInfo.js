import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = ({ charId }) => {

    const [character, setCharacter] = useState(null);

    const { loading, error, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateCharacter();
    }, [charId]);

    const updateCharacter = () => {
        if (!charId) return;

        clearError();

        getCharacter(charId)
            .then(setCharacter);
    }

    const skeleton = character || loading || error ? null : <Skeleton />,
        errorMessage = error ? <ErrorMessage /> : null,
        spinner = loading ? <Spinner /> : null,
        content = !(loading || error || !character) ? <View {...character} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
}

const View = ({ name, description, thumbnail, homepage, wiki, comics }) => {
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
                            <Link to={`/comics/${item.resourceURI.match(/[^/]+$/)}`}>{item.name}</Link>
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