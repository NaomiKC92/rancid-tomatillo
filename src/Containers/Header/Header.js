import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../Actions';

const Header = ({ user, signOut }) => {
  if (!user) {
  return (
    <header>
      <h1>Welcome to Rancid Tomatillo</h1>
      <Link to='/login'>Sign In</Link>
    </header>
  ) 
  }

  return (
  <header>
    <h1>Welcome to Rancid Tomatillo</h1>
    <button onClick={signOut}>Sign Out</button>
  </header>
  )
  //if there is a user -> show a logout button
  //this logout button will have a redirect to homepage and update global state to null user
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch( signOut() )
});

export default connect(null, mapDispatchToProps)(Header)
