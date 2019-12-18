import { combineReducers } from 'redux';
import { movies } from './MoviesReducer';
import { isLoading } from './LoadingReducer';
import { user } from './UserReducer';

const rootReducer = combineReducers({
  movies,
  isLoading,
  user
});

export default rootReducer;
