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
        email: '',
        password: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  
  
  

  render() {
    return (
      <form onSubmit={dostuff}>
        <h2>Please LogIn</h2>
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email..."
          onChange={this.handleChange}
          value={this.state.email}
        />
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password..."
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button type="button">Log In</button>
      </form>
    )
  }
}


// export default connect;
