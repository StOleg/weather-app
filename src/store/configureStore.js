import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
    return {
        ...createStore(
            rootReducer,
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run
    };
}