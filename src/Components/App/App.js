import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import MovieContainer from '../../Containers/MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Route exact path='/' component={MovieContainer}/>
    </div>
  );
}

export default App;
