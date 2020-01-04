import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, changeLoading } from '../../Actions';

const Header = ({ user, signOut, changeLoading }) => {
  if (!user) {
  return (
    <header>
      <Link to='/' onClick={() => changeLoading(true)}><h1>Welcome to Rancid Tomatillo</h1></Link>
      <Link to='/login'>Sign In</Link>
    </header>
  )
  }

  return (
  <header>
    <Link to='/' onClick={() => changeLoading(true)}><h1>Welcome to Rancid Tomatillo</h1></Link>
    <button onClick={signOut}>Sign Out</button>
  </header>
  )
  //if there is a user -> show a logout button
  //this logout button will have a redirect to homepage and update global state to null user
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch( signOut() ),
  changeLoading: (isLoading) => dispatch( changeLoading(isLoading))
});

export default connect(null, mapDispatchToProps)(Header)
