import React from 'react';
import Movie from './Movie';
import { shallow } from 'enzyme';

describe('Movie', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Movie />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is a userRating', () => {
    const mockUser = {
      ratings: [
        { name: 'Knives Out', movie_id: 10 },
        { name: 'Moana', movie_id: 7 }
      ]
    };
    const mockId = 7;

    const wrapper = shallow(<Movie user={mockUser} id={mockId}/>);

    expect(wrapper).toMatchSnapshot();
  })
});
