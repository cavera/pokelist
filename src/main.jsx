import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from './middlewares';
import App from './App.jsx';
import './index.css';
import rootReducer from './reducers/rootReducer.js';

const root = document.getElementById('root');

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

createRoot(root).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
