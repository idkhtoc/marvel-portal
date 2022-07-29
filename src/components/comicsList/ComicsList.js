import { useState, useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = props => {
    const { loading, error, getAllComics, _baseComicOffset } = useMarvelService();

    const [comics, setComics] = useState([]);
    const [newItemsLoading, setNewItemsLoading] = useState(false);
    const [offset, setOffset] = useState(_baseComicOffset);
    const [comicsEnded, setComicsEnded] = useState(false);

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {


        setNewItemsLoading(initial ? false : true);

        getAllComics(offset)
            .then(onComicsListLoaded);
    }

    const onComicsListLoaded = (newComics) => {
        let ended = false;

        if (newComics.length < 8) ended = true;

        setComics(comics => [...comics, ...newComics]);
        setNewItemsLoading(false);
        setOffset(offset => offset + 50);
        setComicsEnded(ended);
    }

    const renderItems = comics => {
        comics = comics.map(({ thumbnail, title, price }, index) => (
            <li
                className="comics__item"
                key={index}
                tabIndex={0}
            >
                <a href="#">
                    <img src={thumbnail} alt="comic" className="comics__item-img" />
                    <div className="comics__item-name">{title}</div>
                    <div className="comics__item-price">{price}</div>
                </a>
            </li>
        ));

        return (
            <ul className="comics__grid">
                {
                    comics
                }
            </ul>
        );
    }

    const errorMessage = error ? <ErrorMessage /> : null,
        spinner = loading && !newItemsLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {renderItems(comics)}
            <button
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newItemsLoading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
}

export default ComicsList;