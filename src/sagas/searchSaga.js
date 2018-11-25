import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { requestCity, requestCitySuccess, requestCityFailure } from '../actions/searchActions';

function* watchFetchCity() {
	yield takeLatest(types.FETCHED_CITY, fetchCityAsync);
}

function* fetchCityAsync(action) {
	try {
		yield put(requestCity());
		const response = yield call(() => {
			return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${action.searchText}&units=metric&appid=f31eecfb7943f1ec0ab3e031c4e5eaa1`);
		}
		);
		if (response.status >= 200 && response.status < 300) {
			const data = yield response.json();
			yield put(requestCitySuccess(data));
		} else {
			yield put(requestCityFailure());
			console.log(response);
		}
	} catch (error) {
		yield put(requestCityFailure());
		console.log(error);
	}
}

export default watchFetchCity;