import { all } from 'redux-saga/effects';
import { currentTestSaga } from './currentTestSaga';
import { watchFetchCity } from './searchSaga';

export default function* rootSaga() {
    yield all ([
        watchFetchCity(),
        currentTestSaga()
    ]);
}