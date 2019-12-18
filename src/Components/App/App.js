import React from 'react';
import logo from '../../logo.svg';
import './App.scss';
import MovieContainer from '../../Containers/MovieContainer/MovieContainer';
import { Route } from 'react-router-dom';
import Login from '../../Containers/Login/Login';

const App = () => {
  return (
    <div className='App'>
      <Login />
      {/* <Route exact path='/' component={MovieContainer}/> */}
    </div>
  );
}

export default App;
