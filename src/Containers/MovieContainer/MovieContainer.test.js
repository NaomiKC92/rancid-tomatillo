import React from 'react';
import './MovieContainer';
import { MovieContainer, mapDispatchToProps } from './MovieContainer';
import { setMovies, changeLoading } from '../../Actions';

describe('MovieContainer', () => {
  
  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach( () => {
      mockDispatch = jest.fn();
    })

    it('should call dispatch with the changeLoading action when changeLoading is called', () => {
      const actionToDispatch = changeLoading(false);
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.changeLoading(false);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with the set movies action when setMovies is called', () => {
      const movies = [{title: 'The Marriage Story'}, {title: 'Knives Out'}, {title: 'It Chapter Two'}]
      const actionToDispatch = setMovies(movies)
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.setMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  })


})