import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
	const { process, setProcess, request, clearError } = useHttp();

	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=5feaf92d234eb7f2aa5a014a2bd2e75d';
	const _baseOffset = 210;
	const _baseComicOffset = 0;

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

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getAllComics = async (offset = _baseComicOffset) => {
		const res = await request(
			`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformComic);
	};

	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComic(res.data.results[0]);
	};

	return {
		process,
		setProcess,
		getAllCharacters,
		getCharacter,
		_baseOffset,
		_baseComicOffset,
		getComic,
		clearError,
		getAllComics,
	};
};

export default useMarvelService;
