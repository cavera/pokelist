import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
	return (
		<div className='PokemonList'>
			{pokemons?.map((pokemon, index) => {
				return (
					<PokemonCard
						key={index}
						id={pokemon.id}
						name={pokemon.name}
						image={pokemon.sprites.front_default}
						favorite={pokemon.favorite}
						abilities={pokemon.types.map(elem => elem.type.name).join(', ')}
					/>
				);
			})}
		</div>
	);
};

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
};

export default PokemonList;
