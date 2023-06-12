import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg';
import { getPokemons , getPokemonDetails} from './api';
import { setPokemons } from './actions';

function App() {
	const pokemons = useSelector(state => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			const pokemonsRes = await getPokemons();
			const pokemonDetails = await Promise.all(pokemonsRes.map(pokemon=>getPokemonDetails(pokemon)))
			dispatch(setPokemons(pokemonDetails));
		};

		fetchPokemons();
	}, [dispatch]);

	return (
		<>
			<Col
				span={4}
				offset={10}>
				<img
					src={logo}
					alt='logo'
					className='logo'
				/>
			</Col>
			<Col
				span={8}
				offset={8}>
				<Searcher />
			</Col>
			<PokemonList pokemons={pokemons} />
		</>
	);
}

export default App;
