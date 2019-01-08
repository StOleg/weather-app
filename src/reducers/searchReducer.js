/* eslint-disable indent */
import * as types from '../constants/actionTypes';

const initialState = {
    searchText: '',
    loading: false,
    error: false,
    city: {},
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REQUESTED_CITY:
            return {
                ...state,
                loading: true,
                error: false
            };
        case types.REQUESTED_CITY_SUCCEEDED: {
            const { city, list } = action.payload;
            return {
                ...state,
                city,
                list,
                loading: false,
                error: false
            };
        }
        case types.REQUESTED_CITY_FAILED:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
};