import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import MovieContainer from '../../Containers/MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import Login from '../../Containers/Login/Login';
import { connect } from 'react-redux';
import Header from '../../Containers/Header/Header';
import MoviePage from '../../MoviePage/MoviePage';

const App = ({ movies, user }) => {
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

const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user
})

export default connect(mapStateToProps)(App)
