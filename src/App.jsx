import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg';
import { getPokemons } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
// import {toJS} from 'immutable'

function App() {
	const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
	// const loading = useSelector(state => state.loading);
	const loading = useSelector(state => state.getIn(['ui', 'loading']));

	const dispatch = useDispatch();

	useEffect(() => {
		const fetchPokemons = async () => {
			dispatch(setLoading(true));
			const pokemonsRes = await getPokemons();
			dispatch(getPokemonsWithDetails(pokemonsRes));
			dispatch(setLoading(false));
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
