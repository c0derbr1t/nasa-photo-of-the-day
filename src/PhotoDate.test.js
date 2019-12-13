import React from 'react';
import renderer from 'react-test-renderer';

import PhotoDate from "./components/Header/PhotoDate";

it('renders correctly when there is a date passed', () => {
    const date = {date: '2015-10-10'};
    const tree = renderer.create(<PhotoDate nasaData={date} />).toJSON();
    expect(tree).toMatchSnapshot();
});