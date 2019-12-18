import React, { Component }from 'react';
import './Login.scss';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: {
        email: false,
        password: false,
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
        errorState[key] = true;
        this.setState({ error: errorState });
      } else {
        errorState[key] = false;
        this.setState({ error: errorState })
      }
    });
  }

  

  logInUser = () => {
    //fetch post, .catch(err => this.setState({message: err}))
  }
  
  

  render() {
    const emailError = this.state.error.email ? 'error' : '';
    const passwordError = this.state.error.password ? 'error' : '';
    return (
      <form >
        <h2>Please Log In</h2>
        <div className="label-input">
          <label for="email">Email:</label><br />
          <input
            className={emailError}
            id="email"
            name="email"
            type="text"
            placeholder="Email..."
            onChange={this.handleChange}
            value={this.state.email}
          /><br />
        </div>
        <div className="label-input">
        <label for="password">Password:</label><br />
        <input
          className={passwordError}
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


export default Login;
