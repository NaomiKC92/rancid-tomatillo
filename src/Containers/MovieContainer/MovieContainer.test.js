import React from 'react';
import { shallow } from 'enzyme';
import { MovieContainer, mapDispatchToProps } from './MovieContainer';
import { setMovies, changeLoading } from '../../Actions';
import { getMovies } from '../../apiCalls';

jest.mock('../../apiCalls.js')

describe('MovieContainer', () => {
  let wrapper, mockChangeLoading, mockSetMovies, mockMovies, mockIsLoading, mockUser;
  beforeEach( () => {
    mockChangeLoading = jest.fn();
    mockSetMovies = jest.fn();
    mockMovies = [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }];
    mockIsLoading = false;
    mockUser = {
      id: 4,
      name: 'Greg',
      email: 'greg@turing.io',
      ratings: []
    }
    getMovies.mockImplementation( () => {
      return Promise.resolve({"movies": [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }]})
    })
    wrapper = shallow(<MovieContainer 
      setMovies={mockSetMovies} 
      changeLoading={mockChangeLoading}
      movies={mockMovies}
      isLoading={mockIsLoading}
      user={mockUser}
      />)
  });

  it('should match the snapshot when content is loading', () => {
    wrapper = shallow(<MovieContainer isLoading={true}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when isLoading is false', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is a user and a user rating', () => {
    const mockUser = {
      id: 4,
      name: 'Greg',
      email: 'greg@turing.io',
      ratings: [{id: 1, user_id: 4, movie_id: 1, rating: 6, created_at: "someDate", updated_at: "someDate"}]
    }
    const wrapper = shallow(<MovieContainer user={mockUser} movies={mockMovies}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call getMovies when component mounts', () => {
    expect(getMovies).toHaveBeenCalled()
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach( () => {
      mockDispatch = jest.fn();
    });

    it('should call dispatch with the changeLoading action when changeLoading is called', () => {
      const actionToDispatch = changeLoading(false);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.changeLoading(false);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch with the set movies action when setMovies is called', () => {
      const movies = [{title: 'The Marriage Story'}, {title: 'Knives Out'}, {title: 'It Chapter Two'}]
      const actionToDispatch = setMovies(movies)
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});
