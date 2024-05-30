/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import setListContent from '../../utils/setListContent';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = (props) => {
	const { process, setProcess, getAllComics, _baseComicOffset } =
		useMarvelService();

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
			.then(onComicsListLoaded)
			.then(() => setProcess('confirmed'))
			.catch((error) => {
				throw error.message;
			});
	};

	const onComicsListLoaded = (newComics) => {
		let ended = false;

		if (newComics.length < 8) ended = true;

		setComics((comics) => [...comics, ...newComics]);
		setNewItemsLoading(false);
		setOffset((offset) => offset + 8);
		setComicsEnded(ended);
	};

	const renderItems = (comics) => {
		comics = comics.map(({ id, thumbnail, title, price }, index) => (
			<CSSTransition key={index} classNames="comics__item" timeout={400}>
				<li className="comics__item" tabIndex={0}>
					<Link to={`${id}`}>
						<img
							src={thumbnail}
							alt="comic"
							className="comics__item-img"
						/>
						<div className="comics__item-name">{title}</div>
						<div className="comics__item-price">{price}</div>
					</Link>
				</li>
			</CSSTransition>
		));

		return (
			<ul className="comics__grid">
				<TransitionGroup component={null}>{comics}</TransitionGroup>
			</ul>
		);
	};

	const elements = useMemo(() => {
		return setListContent(
			process,
			() => renderItems(comics),
			newItemsLoading,
		);
	}, [process]);

	return (
		<div className="comics__list">
			{elements}
			<button
				className="button button__main button__long"
				onClick={() => onRequest(offset)}
				disabled={newItemsLoading}
				style={{ display: comicsEnded ? 'none' : 'block' }}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

export default ComicsList;
