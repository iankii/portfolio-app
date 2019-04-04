import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import firebase from './../../firebase';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Button, InputAdornment, IconButton } from '@material-ui/core/';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import classes from './Register.css';

class Register extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    showPassword: false,
    registered: false
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  showRegistrationForm = () => {
    const { email, password, error, showPassword } = this.state;

    return (
      <form className={classes.LoginForm} autoComplete="off">
        <TextField
          className={classes.FormItem}
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={this.handleChange('email')}
          required
        />

        <TextField
          required
          className={classes.FormItem}
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.Button + ' ' + classes.FormItem}
          onClick={this.handleSubmit}
        >
          Register
          </Button>

        {error ? (
          <p>
            {error.message}
          </p>
        ) : null}

        <p className={classes.Register}>Already registered!
              <Link className={classes.RegisterLink} to="/login" >LOGIN HERE</Link>
        </p>
      </form>
    );
  }

  render() {
    // return this.state.registered ?  null : this.showRegistrationForm();
    return this.showRegistrationForm();
  };
}

export default withRouter(Register);
