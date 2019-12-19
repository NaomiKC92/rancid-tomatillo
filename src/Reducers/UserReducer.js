export const user = (state = null, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return action.user;

    case 'SIGN_OUT':
      return null;

    case 'UPDATE_RATINGS':
      state.ratings = action.ratings
      return state

    default:
      return state
  }
}
