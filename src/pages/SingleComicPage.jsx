import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import useMarvelService from '@services/MarvelService';
import setContent from '@utils/setContent';

import './style/singleComicPage.scss';

const SingleComic = () => {
	const { comicId } = useParams();
	const [comic, setComic] = useState(null);
	const { process, setProcess, getComic, clearError } = useMarvelService();

	useEffect(() => {
		updateComic();
	}, [comicId]);

	const updateComic = () => {
		clearError();
		getComic(comicId)
			.then(setComic)
			.then(() => setProcess('confirmed'));
	};

	return <>{setContent(process, View, comic)}</>;
};

const View = ({
	title,
	description,
	pageCount,
	thumbnail,
	language,
	price,
}) => {
	return (
		<div className="single-comic">
			<img src={thumbnail} alt={title} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{title}</h2>
				<p className="single-comic__descr">{description}</p>
				<p className="single-comic__descr">{pageCount}</p>
				<p className="single-comic__descr">Language: {language}</p>
				<div className="single-comic__price">{price}</div>
			</div>
			<Link to="/comics" className="single-comic__back">
				Back to all
			</Link>
		</div>
	);
};

export default SingleComic;
