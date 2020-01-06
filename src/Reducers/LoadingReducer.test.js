import { isLoading } from './LoadingReducer';

describe('isLoading Reducer', () => {
  let mockAction;
  let mockState;

  beforeEach(() => {
    mockState = true;
    mockAction = {
      type: 'CHANGE_LOADING',
      isLoading: false
    };
  })

  it('should return default state when there is no state', () => {
    expect(isLoading(undefined, { type: 'none' })).toEqual(true);
  })

  it('should return the isLoading object when it has the CHANGE_LOADING type', () => {
    expect(isLoading(mockState, mockAction)).toEqual(false);
  })
})
