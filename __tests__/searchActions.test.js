import { requestCity, requestCitySuccess, requestCityFailure, fetchCity } from '../src/actions/searchActions';
import * as types from '../src/constants/actionTypes';

describe('>>> A C T I O N --- Test SearchActions', () => {
    it('+++ actionCreator requestCity', () => {
        const request = requestCity();
        expect(request).toEqual({ type: types.REQUESTED_CITY });
    });
    it('+++ actionCreator requestCitySuccess', () => {
        const cityWeather = requestCitySuccess({ name: 'Lviv', weather: 'Clouds' });
        expect(cityWeather).toEqual({ type: types.REQUESTED_CITY_SUCCEEDED, payload: { name: 'Lviv', weather: 'Clouds' } });
    });
    it('+++ actionCreator requestCityFailure', () => {
        const requestFailure = requestCityFailure();
        expect(requestFailure).toEqual({ type: types.REQUESTED_CITY_FAILED });
    });
    it('+++ actionCreator fetchCity', () => {
        const city = fetchCity('Lviv');
        expect(city).toEqual({ type: types.FETCHED_CITY, searchText: 'Lviv' });
    });
});