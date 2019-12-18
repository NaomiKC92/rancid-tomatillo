import React from 'react';
import Movie from './Movie';
import { shallow } from 'enzyme';

describe('Movie', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Movie />);

    expect(wrapper).toMatchSnapshot();
  });
});