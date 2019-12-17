import { combineReducers } from 'redux';
import { movies } from './MoviesReducer';
import { isLoading } from './LoadingReducer';

const rootReducer = combineReducers({
  movies,
  isLoading
});

export default rootReducer;
