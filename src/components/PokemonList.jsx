import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
	return (
		<div className='PokemonList'>
			{pokemons?.map((pokemon, index) => {
				return(
				<PokemonCard
					key={index}
					name={pokemon.name}
					image={pokemon.sprites.front_default}
					abilities={pokemon.abilities.map(ability=>ability.ability.name).join(', ')}
				/>
			)
			})}
		</div>
	);
};

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
};

export default PokemonList;
