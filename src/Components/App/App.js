import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import MovieContainer from '../../Containers/MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import Login from '../../Containers/Login/Login';

const App = ({ movies }) => {
  return (
    <div className='App'>
      <Route exact path='/' component={MovieContainer}/>
      <Route path='login' component={Login} />
      {/* <Route path='/movie/:movie_id' render={({ match }) => {
        const moviePage = movies.find(movie => movie.id === parseInt(match.params.id));
        return <MoviePage movie={moviePage}/>
      }}/>  */}
    </div>
  );
}

export default App;
