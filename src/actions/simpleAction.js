import * as types from '../constants/actionTypes';

export const simpleAction = () => ({
	type: types.SIMPLE_ACTION,
	payload: 'result_of_simple_action'
});