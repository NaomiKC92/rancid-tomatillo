import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to map state properties to props', () => {
    const state = {
      movies: [ { name: 'Trolls 2' } ],
      user: { name: 'Dustin' },
      userRating: 7
    };

    const expected = {
      movies: [ { name: 'Trolls 2' } ],
      user: { name: 'Dustin' },
    };

    expect(mapStateToProps(state)).toEqual(expected);
  })

});
