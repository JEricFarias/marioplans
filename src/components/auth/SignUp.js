import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('State:', this.state);
  };

  render() {
    if (this.props.auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field lighten-1 z-depth-0">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
