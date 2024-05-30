import { useHttp } from '@hooks/http.hook';

import { BASE_OFFSET, BASE_COMIC_OFFSET, API_KEY, API_BASE } from '@constants';

const useMarvelService = () => {
	const { process, setProcess, request, clearError } = useHttp();

	const _transformCharacter = (character) => {
		return {
			id: character.id,
			name: character.name,
			description: character.description
				? `${character.description.slice(0, 210)}...`
				: 'There is no description for this character',
			thumbnail:
				character.thumbnail.path + '.' + character.thumbnail.extension,
			homepage: character.urls[0].url,
			wiki: character.urls[1].url,
			comics: character.comics.items.splice(0, 10),
		};
	};

	const _transformComic = (comic) => {
		return {
			id: comic.id,
			title: comic.title || 'Title is not available',
			thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
			price: comic.prices[0].price
				? comic.prices[0].price + '$'
				: 'Price is not available',
			pageCount: comic.pageCount
				? `${comic.pageCount} pages`
				: 'No information about the number of pages',
			language: comic.textObjects.language || 'en-us',
			description: comic.description || 'There is no description',
		};
	};

	const getAllCharacters = async (offset = BASE_OFFSET) => {
		const res = await request(
			`${API_BASE}characters?limit=9&offset=${offset}&${API_KEY}`,
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (id) => {
		const res = await request(`${API_BASE}characters/${id}?${API_KEY}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getAllComics = async (offset = BASE_COMIC_OFFSET) => {
		const res = await request(
			`${API_BASE}comics?limit=8&offset=${offset}&${API_KEY}`,
		);
		return res.data.results.map(_transformComic);
	};

	const getComic = async (id) => {
		const res = await request(`${API_BASE}comics/${id}?${API_KEY}`);
		return _transformComic(res.data.results[0]);
	};

	return {
		process,
		setProcess,
		getAllCharacters,
		getCharacter,
		getComic,
		clearError,
		getAllComics,
	};
};

export default useMarvelService;
