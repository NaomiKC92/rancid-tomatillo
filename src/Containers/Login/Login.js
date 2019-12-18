import React, { Component }from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { getUser } from '../../apiCalls';
import { Redirect } from 'react-router-dom';
import { addUser } from '../../Actions'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: {
        email: '',
        password: '',
      },
      message: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  checkInputs = () => {
    const errorState = {...this.state.error};
    Object.keys(errorState).forEach(key => {
      if (!this.state[key]) {
        errorState[key] = 'error';
        this.setState({ error: errorState });
      } else {
        errorState[key] = '';
        this.setState({ error: errorState })
      }
    });
    this.checkReady();
  }

  checkReady = () => {
    let ready = true;
    const error = {...this.state.error};
    Object.keys(error).forEach(key => {
      if (this.state.error[key]) {
        ready = false;
      }
    })
    if (ready) {
      this.logInUser();
    };
  }

  logInUser = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    getUser(user)
      .then(data => {
        this.props.submitUser(data.user);
        //update user in redux state
        //redirect to '/'
      })
      .catch(err => this.setState({ message: err.message }));
  }
  
  render() {
    return (
      <form >
        <h2>Please Log In</h2>
        <div className="label-input">
          <label htmlFor="email">Email:</label><br />
          <input
            className={this.state.error.email}
            id="email"
            name="email"
            type="text"
            placeholder="Email..."
            onChange={this.handleChange}
            value={this.state.email}
          /><br />
        </div>
        <div className="label-input">
        <label htmlFor="password">Password:</label><br />
        <input
          className={this.state.error.password}
          id="password"
          name="password"
          type="password"
          placeholder="Password..."
          onChange={this.handleChange}
          value={this.state.password}
        />
        </div>
        <p className='error-msg'>{this.state.message}</p>
        <button type="button" onClick={this.checkInputs}>Log In</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  submitUser: user => dispatch( addUser(user) )
})


export default connect(null, mapDispatchToProps)(Login);
