import { fromJS } from 'immutable';
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from '../actions/types';

const initialState = fromJS({
	pokemons: [],
});

export const pokemonsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POKEMONS: {
			// return { ...state, pokemons: action.payload };
			return state.setIn(['pokemons'], fromJS(action.payload));
		}

		case SET_FAVORITE: {
			// const newPokemonsList = state.pokemons.map(pokemon => {
			// 	if (pokemon.id === action.payload.pokemonId) {
			// 		return { ...pokemon, favorite: !pokemon.favorite };
			// 	}
			// 	return pokemon;
			// });

			const currentPokemonIndex = state.get('pokemons').findIndex(pokemon => {
				return pokemon.get('id') === action.payload.pokemonId;
			});

			// const isFav = state.get('pokemons').get(currentPokemonIndex).get(favorite)
			const isFav = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);

			return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFav);
		}

		default:
			return state;
	}
};
