import { setMovies, changeLoading, addUser, signOut, updateRatings } from './index';

describe('actions', () => {
  it('should add a type in the setMovies action', () => {
    let mockMovies = [
      { name: 'Moana' },
      { name: 'Knives Out' }
    ];
    let expected = {
      type: 'SET_MOVIES',
      movies: mockMovies
    };

    expect(setMovies(mockMovies)).toEqual(expected);
  });

  it('should add a type and switch boolean in the changeLoading action', () => {
    let mockIsLoading = true;
    let mockIsLoading2 = false;
    let expected = {
      type: 'CHANGE_LOADING',
      isLoading: false
    }
    let expected2 = {
      type: 'CHANGE_LOADING',
      isLoading: true
    }

    expect(changeLoading(mockIsLoading)).toEqual(expected);
    expect(changeLoading(mockIsLoading2)).toEqual(expected2);
  });

  it('should add a type in the addUser action', () => {
    let mockUser = {
      name: 'John Adams'
    };
    let expected = {
      type: 'ADD_USER',
      user: mockUser
    }

    expect(addUser(mockUser)).toEqual(expected);
  });

  it('should return type in an object for the signOut action', () => {
    let expected = {
      type: 'SIGN_OUT'
    };

    expect(signOut()).toEqual(expected);
  });

  it('should add a type in the updateRatings action', () => {
    let mockRatings = [
      { name: 'Moana', rating: 7 },
      { name: 'Knives Out', rating: 5 }
    ];
    let expected = {
      type: 'UPDATE_RATINGS',
      ratings: mockRatings
    };

    expect(updateRatings(mockRatings)).toEqual(expected);
  })
})
