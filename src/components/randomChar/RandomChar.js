import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {

    const [character, setCharacter] = useState(null);
    const { loading, error, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateCharacter()
    }, []);

    const updateCharacter = () => {
        clearError();

        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

        getCharacter(id)
            .then(setCharacter)
            .catch(error => { throw error.message });
    }

    const errorMessage = error ? <ErrorMessage /> : null,
        spinner = loading ? <Spinner /> : null,
        content = !(loading || error || !character) ? <View character={character} /> : null;

    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateCharacter}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    );
}

const View = ({ character }) => {
    const { thumbnail, name, description, homepage, wiki } = character,
        thumbnailClassName = `randomchar__img ${thumbnail.includes('image_not_available') ? 'randomchar__img_un' : null}`;

    return (
        <div className='randomchar__block'>
            <img src={thumbnail} alt="Random character" className={thumbnailClassName} />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} target="_blank" rel="noreferrer" className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} target="_blank" rel="noreferrer" className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RandomChar;