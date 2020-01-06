import React from 'react';
import MoviePage from './MoviePage';
import { shallow } from 'enzyme';

describe('MoviePage', () => {
  it('should match the snapshot when there is no user', () => {
    const wrapper = shallow(<MoviePage />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is a user and a userRating', () => {
    const mockUser = {
      ratings: [
        { name: 'Knives Out', movie_id: 10 },
        { name: 'Moana', movie_id: 7 }
      ]
    };

    const mockId =7;

    const wrapper = shallow(<MoviePage user={mockUser} id={mockId} />);

    expect(wrapper).toMatchSnapshot();
  })
})
