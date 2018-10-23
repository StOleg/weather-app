import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './static/index.css';
import App from './components/App';

const store = configureStore();
const rootElement = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);