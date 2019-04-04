import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import firebase from './../../firebase';
import { TextField, Button, InputAdornment, IconButton } from '@material-ui/core/';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import classes from './Login.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    showPassword: false,
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
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
        this.setState({ error: null });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };

  render() {
    var { error } = this.state;

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
            value={this.state.email}
            onChange={this.handleChange('email')}
            required
          />

          <TextField
            required
            className={classes.FormItem}
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
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
            Login
          </Button>
          {error ? (
            <p>
              {error.message}
            </p>
          ) : null}
          <p className={classes.Register}>Opps...don't have any account yet!
            <Link className={classes.RegisterLink} to="/register" >REGISTER HERE</Link>
          </p>
        </form>
    );
  };
}

export default withRouter(Login);
