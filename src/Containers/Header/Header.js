import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut, changeLoading } from '../../Actions';
import PropTypes from 'prop-types';

export const Header = ({ user, signOut, changeLoading }) => {
  if (!user) {
  return (
    <header>
      <Link to='/' onClick={() => changeLoading(true)} className='title-link'><h1>RANCID TOMATILLO</h1></Link>
      <Link to='/login' className='login-link'>Sign In</Link>
    </header>
  )
  }

  return (
  <header>
    <Link to='/' onClick={() => changeLoading(true)} className='title-link'><h1>RANCID TOMATILLO</h1></Link>
    <button onClick={signOut} className='logout-link'>Sign Out</button>
  </header>
  )
}

export const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch( signOut() ),
  changeLoading: (isLoading) => dispatch( changeLoading(isLoading))
});

export default connect(null, mapDispatchToProps)(Header);

Header.propTypes = {
  user: PropTypes.object,
  signOut: PropTypes.func,
  changeLoading: PropTypes.func
}
