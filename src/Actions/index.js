export const setMovies = movies => ({
  type: 'SET_MOVIES',
  movies
})

export const changeLoading = isLoading => ({
  type: 'CHANGE_LOADING',
  isLoading: !isLoading
})
