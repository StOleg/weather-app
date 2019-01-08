import { mapStateToProps } from '../src/containers/SearchCity';

describe('>>> Search City Component', () => {
    it('It should map the state to props correctly', () => {
        const sampleState = {
            city: {},
            loading: false,
            error: false,
            dailyList: []
        };
        const appState = {
            searchReducer: sampleState
        };
        const componentState = mapStateToProps(appState);
        expect(componentState).toEqual(sampleState);
    });
});