import React from 'react';
import { shallow } from 'enzyme';
import { getMovies } from './apiCalls'
import { promised } from 'q';

describe('apiCalls', () => {

  describe('getMovies', () => {
    let mockMovies;

    beforeEach( () => {
      mockMovies = [
        {title: 'Jumanji', id: 1}, 
        {title: 'Frozen II', id: 2}, 
        {title: 'Knives Out', id: 3}
      ];
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies)
        })
      })
    });

    it('should call fetch with the correct URL', () => {
      getMovies();
      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    });

    it('should return a movies array', () => {
      expect(getMovies()).resolves.toEqual(mockMovies)
    });

    it('should throw an error when response is not ok', () => {
      window.fetch = jest.fn().mockImplementation( () => {
        return Promise.resolve({ok: false})
      })
      expect(getMovies()).rejects.toEqual(Error('Oops! The Box Office must be closed!'))
    });
  });

});