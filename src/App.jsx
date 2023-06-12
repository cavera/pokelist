import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
	const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
	const loading = useSelector(state => state.ui.loading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPokemonsWithDetails());
	}, []);

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

			{loading ? (
				<Spin
					spinning
					size='large'
					className='preloader'
				/>
			) : (
				<PokemonList pokemons={pokemons} />
			)}
		</>
	);
}

export default App;
