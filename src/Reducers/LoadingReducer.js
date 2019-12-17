export const isLoading = (state = true, action) => {
  switch(action.type) {
    case 'CHANGE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
