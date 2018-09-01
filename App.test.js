import React from 'react';
import Login from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Login/>).toJSON();
    expect(rendered).toBeTruthy();
});
