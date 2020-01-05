import { movies } from './MoviesReducer';

describe('Movies Reducer', () => {
  it('should return an empty array when default is triggered', () => {
    expect(movies(undefined, { type: 'none' })).toEqual([]);
  })

  it('should return an array of movies when type is SET_MOVIES', () => {
    let mockAction = {
      type: 'SET_MOVIES',
      movies: [
        { name: 'Moana' },
        { name: 'Knives Out' }
      ]
    };
    let expected = [
      { name: 'Moana' },
      { name: 'Knives Out' }
    ]

    expect(movies(undefined, mockAction)).toEqual(expected);
  })
})
