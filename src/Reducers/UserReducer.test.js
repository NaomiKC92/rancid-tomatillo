import { user } from './UserReducer';

describe('User Reducer', () => {
  it('should return a user when ADD_USER is the type', () => {
    let mockAction = {
      type: 'ADD_USER',
      user: {
        name: 'John Adams'
      }
    };
    let expected = {
      name: 'John Adams'
    }

    expect(user(undefined, mockAction)).toEqual(expected);
  })

  it('should return null when SIGN_OUT is the type', () => {
    let mockState = {
      name: 'John Adams'
    }
    let mockAction = {
      type: 'SIGN_OUT'
    };

    expect(user(mockState, mockAction)).toEqual(null)
  })

  it('should return new ratings when UPDATE_RATINGS is the type', () => {
    let newRatings = [
      { name: 'Knives Out', rating: 7 },
      { name: 'Moana', rating: 6 },
      { name: 'Jojo Rabbit', rating: 10 }
    ];
    let newState = {
      ratings: newRatings
    }
    let mockAction = {
      type: 'UPDATE_RATINGS',
      ratings: newRatings
    };
    let oldState = {
      ratings: [
        { name: 'Knives Out', rating: 7 },
        { name: 'Moana', rating: 6 }
      ]
    };

    expect(user(oldState, mockAction)).toEqual(newState);
  })

  it('should return null when default state is triggered', () => {
    expect(user(undefined, { type: 'none' })).toEqual(null);
  })
})
