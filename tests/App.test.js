import React from 'react';
import ReactDOM from 'react-dom';
import { SearchCity } from '../src/components/SearchCity';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SearchCity simpleAction={() => {}}/>, div);
});