import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { pokemonsReducer } from './reducers/pokemons.js';
import { logger } from './middlewares'
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');

const composedEnhancers = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	// applyMiddleware(logger) 
	)

const store = createStore(pokemonsReducer, composedEnhancers);

createRoot(root).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
