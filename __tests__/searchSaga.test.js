import { apply, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as types from '../src/constants/actionTypes';
import { requestCity, requestCitySuccess, requestCityFailure } from '../src/actions/searchActions';
import { watchFetchCity, fetchCityAsync } from '../src/sagas/searchSaga';
import { responcePayload } from '../data/mock-response-payload';
import objectAssignDeep from 'object-assign-deep';

describe('>>> S A G A --- Test searchSaga', () => {
    it('+++ saga watchFetchCity', () => {
        const gen = watchFetchCity();
        expect(gen.next().value).toEqual(takeEvery(types.FETCHED_CITY, fetchCityAsync));
    });
    describe('+++ saga fetchCityAsync', () => {
        let gen;
        let action;
        beforeEach(() => {
            action = {
                searchText: 'Lviv',
            };
            gen = fetchCityAsync(action);
            expect(gen.next().value).toEqual(put(requestCity()));
        });
        describe('++++ saga fetchCityAsync asks to call the API', () => {
            beforeEach(() => {
                expect(gen.next().value).toEqual(call(fetch, `https://api.openweathermap.org/data/2.5/forecast?q=${action.searchText}&units=metric&appid=f31eecfb7943f1ec0ab3e031c4e5eaa1`));
            });
            it('+++++ call the API successfully', () => {
                const json = () => { };
                const response = {
                    json,
                    status: 200
                };
                const data= objectAssignDeep(responcePayload);
                expect(gen.next(response).value).toEqual(apply(response, json));
                expect(gen.next(data).value).toEqual(put(requestCitySuccess(data)));
            });
            it('+++++ call the API unsuccessfully', () => {
                expect(gen.next({ status: 300 }).value).toEqual(put(requestCityFailure()));
            });
        });
        it('++++ saga fetchCityAsync reacts correctly to the failure', () => {
            expect(gen.throw().value).toEqual(put(requestCityFailure()));
        });
    });
});