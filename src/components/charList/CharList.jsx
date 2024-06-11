/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useMemo } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import setListContent from '@utils/setListContent';

import useMarvelService from '@services/MarvelService';

import './charList.scss';

const CharList = ({ onCharSelected }) => {
	const { process, setProcess, getAllCharacters, baseOffset } =
		useMarvelService();

	const [characters, setCharacters] = useState([]);
	const [newItemsLoading, setNewItemsLoading] = useState(false);
	const [offset, setOffset] = useState(baseOffset);
	const [charEnded, setCharEnded] = useState(false);

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const onRequest = (offset, initial) => {
		setNewItemsLoading(initial ? false : true);

		getAllCharacters(offset)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'))
			.catch((error) => {
				throw error.message;
			});
	};

	const onCharListLoaded = (newCharacters) => {
		let ended = false;

		if (newCharacters.length < 9) ended = true;

		setCharacters((characters) => [...characters, ...newCharacters]);
		setNewItemsLoading(false);
		setOffset((offset) => offset + 9);
		setCharEnded(ended);
	};

	const itemRefs = useRef([]);

	const focusOnItem = (index) => {
		itemRefs.current.forEach((item) =>
			item.classList.remove('char__item_selected')
		);
		itemRefs.current[index].classList.add('char__item_selected');

		itemRefs.current[index].focus();
	};

	const renderItems = (chars) => {
		chars = chars.map(({ id, thumbnail, name }, index) => (
			<CSSTransition key={id} classNames='char__item' timeout={400}>
				<li
					tabIndex={0}
					ref={(el) => (itemRefs.current[index] = el)}
					onClick={() => {
						onCharSelected(id);
						focusOnItem(index);
					}}
					onKeyDown={(e) => {
						if (e.key === ' ' || e.key === 'Enter') {
							onCharSelected(id);
							focusOnItem(index);
						}
					}}
					className='char__item'
				>
					<img
						className={
							thumbnail.includes('image_not_available')
								? 'un'
								: ''
						}
						src={thumbnail}
						alt='character'
					/>
					<div className='char__name'>{name}</div>
				</li>
			</CSSTransition>
		));

		return (
			<ul className='char__grid'>
				<TransitionGroup component={null}>{chars}</TransitionGroup>
			</ul>
		);
	};

	const elements = useMemo(() => {
		return setListContent(
			process,
			() => renderItems(characters),
			newItemsLoading
		);
	}, [process]);

	return (
		<div className='char__list'>
			{elements}
			<button
				className='button button__main button__long'
				onClick={() => onRequest(offset)}
				disabled={newItemsLoading}
				style={{ display: charEnded ? 'none' : 'block' }}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
