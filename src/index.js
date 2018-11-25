import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import watchFetchCity from './sagas/searchSaga';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';
import SearchCity from './containers/SearchCity';

const store = configureStore();
store.runSaga(watchFetchCity);
const rootElement = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
		<SearchCity />
	</Provider>,
	rootElement
);