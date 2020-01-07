import React from 'react';
import { RatingForm, mapDispatchToProps } from './RatingForm';
import { shallow } from 'enzyme';
import { updateRatings, setMovies } from '../../Actions';
import { postRating, getUserRatings, getMovies, deleteRating } from '../../apiCalls';

jest.mock('../../apiCalls.js');


describe('RatingForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RatingForm 
      userId={4}
      ratingId={23984}
      movieId={12}
    />)
  });

  it('should match snapshot if there is no userRating', () => {
    const wrapper = shallow(<RatingForm />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should match snapshot if there is a userRating', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('changeRating', () => {
    it('should set the local state to the selected value in the form', () => {
      let mockDefaultState = {
        currentRating: null
      };
      let expected = {
        currentRating: 4
      };
      expect(wrapper.state()).toEqual(mockDefaultState);

      wrapper.instance().changeRating(4);

      expect(wrapper.state()).toEqual(expected);
    });

    it('should update local state onChange of select', () => {
      let mockDefaultState = {
        currentRating: null
      };
      const mockEvent = {
        target: {
          value: 2
        }
      }
      expect(wrapper.state()).toEqual(mockDefaultState);

      wrapper.find('select').simulate('change', mockEvent);

      expect(wrapper.state('currentRating')).toEqual(2)
    })
  });

  describe('submitRating', () => {
    let wrapper, mockUpdateRatings, mockSetMovies;
    beforeEach(() => {
      mockUpdateRatings = jest.fn();
      mockSetMovies = jest.fn();
      wrapper = shallow(<RatingForm
        updateRatings={mockUpdateRatings}
        setMovies={mockSetMovies}
        ratingId={undefined}
        movieId={12}
        userId={4}
      />);
      postRating.mockImplementation(() => {
        return Promise.resolve({
          rating: {
            user_id: 4
          }
        })
      });
      getUserRatings.mockImplementation(() => {
        return Promise.resolve({
          ratings: [
            {
              id: 1, 
              user_id: 1, 
              movie_id: 1, 
              rating: 6, 
              created_at: "someDate", 
              updated_at: "someDate"
            }
        ]
      })
      });
      getMovies.mockImplementation(() => {
        return Promise.resolve({
          movies: [
            {
              id: 1, 
              title: "Movie Title",
              poster_path: "someURL", 
              backdrop_path: "someURL", 
              release_date: "2019-12-04", 
              overview: "Some overview", 
              average_rating: 6 }
          ]
        })
      })
    });
    it('should invoke submitRating on button click when there is no userRating', () => {
      wrapper.instance().submitRating = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('#submit-btn').simulate('click');

      expect(wrapper.instance().submitRating).toHaveBeenCalled();
    });

    it('should invoke postRating when submitRating is fired', () => {
      wrapper.instance().changeRating(4);
      wrapper.instance().submitRating();

      expect(postRating).toHaveBeenCalledWith(12, 4, 4)
    });

    it('should invoke getUserRatings when submitRating is fired', () => {
      wrapper.instance().changeRating(4);
      wrapper.instance().submitRating();

      expect(getUserRatings).toHaveBeenCalledWith(4);
    });

    it('should invoke getMovies when submitRating is fired', () => {
      wrapper.instance().submitRating();

      expect(getMovies).toHaveBeenCalled();
    });
  });

  describe('updateRating', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<RatingForm
        ratingId={23984}
        movieId={12}
        userId={4}
      />);
      deleteRating.mockImplementation(() => Promise.resolve({name: 'name'}));
      
    });

    it('should invoke deleteRating and submitRating when updateRating is fired', async () => {
      wrapper.instance().submitRating = jest.fn();
      await wrapper.instance().updateRating();

      expect(deleteRating).toHaveBeenCalledWith(4, 23984);
      expect(wrapper.instance().submitRating).toHaveBeenCalled();
    });

    it('should invoke updateRating on button click when there is a userRating', () => {
      wrapper.instance().updateRating = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('#update-btn').simulate('click');

      expect(wrapper.instance().updateRating).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with an updateRatings action when submitRating is called', () => {
      let mockDispatch = jest.fn();
      let mockAction = updateRatings('WADDUP');

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateRatings('WADDUP');

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    });

    it('should call dispatch with a setMovies action when submitRating is called', () => {
      let mockDispatch = jest.fn();
      let mockAction = setMovies('moviesArray');

      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setMovies('moviesArray');

      expect(mockDispatch).toHaveBeenCalledWith(mockAction);
    })
  })
});
