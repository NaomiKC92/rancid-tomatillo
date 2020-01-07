import React from 'react';
import './App.scss';
import MovieContainer from '../../Containers/MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import Login from '../../Containers/Login/Login';
import { connect } from 'react-redux';
import Header from '../../Containers/Header/Header';
import MoviePage from '../../MoviePage/MoviePage';
import PropTypes from 'prop-types';

export const App = ({ movies, user }) => {
  return (
    <div className='App'>
      <Header user={user}/>
      <Route exact path='/' component={MovieContainer}/>
      <Route path='/login' component={Login} />
      <Route path='/movies/:id' render={({ match }) => {
        const movie = movies.find(movie => movie.id === parseInt(match.params.id));
        return <MoviePage {...movie} user={user}/>
      }}/>
    </div>
  );
}

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object
};
