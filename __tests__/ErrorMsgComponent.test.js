import { ErrorMsg } from '../src/components/ErrorMsg';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

describe('>>> Error Msg Component', () => {
    it('+++ Should be rendered', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<ErrorMsg />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.className).toBe('error_msg');
        expect(result.props.children).toEqual(<p>Error, try again</p>);
    }
    );
});