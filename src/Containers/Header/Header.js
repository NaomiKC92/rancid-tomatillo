import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = ({ user }) => {
  if (!user) {
  return (
    <header>
      <h1>Welcome to Rancid Tomatillo</h1>
      <Link to='/login'>Sign In</Link>
    </header>
  ) 
  }

  //if there is a user -> show a logout button
  //this logout button will have a redirect to homepage and update global state to null user
}

export default Header;
