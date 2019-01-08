import { apply, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as types from '../constants/actionTypes';
import { requestCity, requestCitySuccess, requestCityFailure } from '../actions/searchActions';

export function* watchFetchCity() {
    yield takeEvery(types.FETCHED_CITY, fetchCityAsync);
}

export function* fetchCityAsync(action) {
    try {
        yield put(requestCity());
        const response = yield call(fetch, `https://api.openweathermap.org/data/2.5/forecast?q=${action.searchText}&units=metric&appid=f31eecfb7943f1ec0ab3e031c4e5eaa1`);
        if (response.status >= 200 && response.status < 300) {
            const data = yield apply(response, response.json);
            yield put(requestCitySuccess(data));
        } else {
            yield put(requestCityFailure());
        }
    } catch (error) {
        yield put(requestCityFailure());
    }
}