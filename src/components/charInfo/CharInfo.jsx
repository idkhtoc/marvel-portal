/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import setContent from '@utils/setContent';

import useMarvelService from '@services/MarvelService';

import './charInfo.scss';

const CharInfo = ({ charId }) => {
	const [character, setCharacter] = useState(null);

	const { process, setProcess, getCharacter, clearError } =
		useMarvelService();

	useEffect(() => {
		updateCharacter();
	}, [charId]);

	const updateCharacter = () => {
		if (!charId) return;

		clearError();

		getCharacter(charId)
			.then(setCharacter)
			.then(() => setProcess('confirmed'));
	};

	return (
		<div className='char__info'>{setContent(process, View, character)}</div>
	);
};

const View = ({ name, description, thumbnail, homepage, wiki, comics }) => {
	return (
		<>
			<div className='char__basics'>
				<img
					className={
						thumbnail.includes('image_not_available') ? 'un' : ''
					}
					src={thumbnail}
					alt={name}
				/>
				<div>
					<div className='char__info-name'>{name}</div>
					<div className='char__btns'>
						<a href={homepage} className='button button__main'>
							<div className='inner'>homepage</div>
						</a>
						<a href={wiki} className='button button__secondary'>
							<div className='inner'>Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className='char__descr'>{description}</div>
			<div className='char__comics'>Comics:</div>
			<ul className='char__comics-list'>
				{comics.length
					? null
					: 'There are no comics for this character'}
				{comics.map((item, index) => (
					<li className='char__comics-item' key={index}>
						<Link
							to={`/comics/${item.resourceURI.match(/[^/]+$/)}`}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

CharInfo.propTypes = {
	charId: PropTypes.number,
};

View.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	thumbnail: PropTypes.string.isRequired,
	homepage: PropTypes.string,
	wiki: PropTypes.string,
	comics: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			resourceURI: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default CharInfo;
