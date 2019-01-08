import * as types from '../src/constants/actionTypes';
import searchReducer from '../src/reducers/searchReducer';
import objectAssignDeep from 'object-assign-deep';
import { initialState } from '../data/mock-initial-state';
import { responcePayload } from '../data/mock-response-payload';

describe('>>> R E D U C E R --- Test searchReducer', () => {
    let state;
    let payload;
    beforeEach(() => {
        state = objectAssignDeep(initialState);
        payload = objectAssignDeep(responcePayload);
    });
    it('+++ reducer for default', () => {
        let state = undefined;
        state = searchReducer(state, {});
        expect(state).toEqual(initialState);
    });
    it('+++ reducer for REQUESTED_CITY', () => {
        state = searchReducer(state, { type: types.REQUESTED_CITY });
        expect(state).toEqual({
            ...initialState,
            loading: true,
            error: false
        });
    });
    it('+++ reducer for REQUESTED_CITY_SUCCEEDED', () => {
        state = searchReducer(state, { type: types.REQUESTED_CITY_SUCCEEDED, payload });
        expect(state).toEqual({
            ...initialState,
            ...responcePayload,
            loading: false,
            error: false
        });
    });
    it('+++ reducer for REQUESTED_CITY_FAILED', () => {
        state = searchReducer(state, { type: types.REQUESTED_CITY_FAILED });
        expect(state).toEqual({
            ...initialState,
            loading: false,
            error: true
        });
    });
});