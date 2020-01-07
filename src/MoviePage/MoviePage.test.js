import React from 'react';
import MoviePage from './MoviePage';
import { shallow } from 'enzyme';

describe('MoviePage', () => {
  
  it('should match the snapshot when there is no user', () => {
    const mockReleaseDate = "2019-12-04";
    const mockAverageRating = 4;
    const wrapper = shallow(<MoviePage 
      average_rating={mockAverageRating}
      release_date={mockReleaseDate}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is a user and a userRating', () => {
    const mockReleaseDate = "2019-12-04";
    const mockAverageRating = 4;
    const mockUser = {
      ratings: [
        { name: 'Knives Out', movie_id: 10 },
        { name: 'Moana', movie_id: 7 }
      ]
    };

    const mockId =7;

    const wrapper = shallow(<MoviePage 
      average_rating={mockAverageRating}
      release_date={mockReleaseDate}
      user={mockUser} 
      id={mockId} 
    />);

    expect(wrapper).toMatchSnapshot();
  })
})
