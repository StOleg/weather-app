import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import rootSaga from './sagas/rootSaga';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';
import SearchCity from './containers/SearchCity';

const store = configureStore();
store.runSaga(rootSaga);
const rootElement = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <SearchCity />
    </Provider>,
    rootElement
);