import axios from 'axios';

const API_PREFIX = 'https://pokeapi.co/api/v2/';

export const getPokemons = () => {
	return axios
		.get(`${API_PREFIX}pokemon?limit=15`)
		.then(res => res.data.results)
		.catch(err => console.log(err));
};

export const getPokemonDetails = pokemon => {
	return axios
		.get(pokemon.url)
		.then(res => res.data)
		.catch(err => console.log(err));
};
