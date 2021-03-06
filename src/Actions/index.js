export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
});

export const changeLoading = isLoading => ({
  type: 'CHANGE_LOADING',
  isLoading: !isLoading
});

export const addUser = user => ({
  type: 'ADD_USER',
  user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const updateRatings = ratings => ({
  type: 'UPDATE_RATINGS',
  ratings
})
