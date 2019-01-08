import React from 'react';
import TestRenderer from 'react-test-renderer';
import { DailyForecast } from '../src/components/DailyForecast';
import objectAssignDeep from 'object-assign-deep';
import { outputData } from '../data/mock-output-data';

describe('>>> DailyForecast Component', () => {
    let data;
    it('renders as expected', () => {
        data = objectAssignDeep(outputData);
        const tree = TestRenderer.create(<DailyForecast city={data.city} dailyList={data.dailyList} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});