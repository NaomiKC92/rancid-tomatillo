import React, { Component }from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { getUser, getUserRatings } from '../../apiCalls';
import { Redirect } from 'react-router-dom';
import { addUser, changeLoading } from '../../Actions';


export class Login extends Component {
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
      ready: false
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
    this.logInUser();
  }

  logInUser = () => {
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    getUser(user)
      .then(data => {
        getUserRatings(data.user.id)
          .then(ratings => {
            data.user.ratings = ratings.ratings;
            this.props.submitUser(data.user);
            this.props.changeLoading(false);
            this.setState({ready: true});
          })
      })
      .catch(err => this.setState({ message: err.message }));
  }

  render() {
    if(this.state.ready) {
      return <Redirect to='/' />
    }
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

export const mapDispatchToProps = dispatch => ({
  submitUser: user => dispatch( addUser(user) ),
  changeLoading: (isLoading) => dispatch( changeLoading(isLoading))
})


export default connect(null, mapDispatchToProps)(Login);
