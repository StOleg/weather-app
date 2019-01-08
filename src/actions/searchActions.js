import * as types from '../constants/actionTypes';

export const requestCity = () => ({
    type: types.REQUESTED_CITY
});

export const requestCitySuccess = (payload) => ({
    type: types.REQUESTED_CITY_SUCCEEDED,
    payload
});

export const requestCityFailure = () => ({
    type: types.REQUESTED_CITY_FAILED
});

export const fetchCity = (searchText) => ({
    type: types.FETCHED_CITY,
    searchText
});