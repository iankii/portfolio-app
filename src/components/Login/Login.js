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
import OtherLogins from './OtherLogins';
import classes from './Login.css';
// import './Login.css';

import { loginWithGoogle } from "../../helpers/auth";
import { firebaseAuth } from "../../firebase";


const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

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

  handleGoogleLogin = () => {
    loginWithGoogle()
      .catch(function (error) {
        alert(error); // or show toast
        console.log(error)
        localStorage.removeItem(firebaseAuthKey);
      });
    localStorage.setItem(firebaseAuthKey, "1");
  }

  componentWillMount() {
    /*         firebaseAuth().getRedirectResult().then(function(result) {
     if (result.user) {
     console.log("GoogleLogin Redirect result");
     if (result.credential) {
     // This gives you a Google Access Token. You can use it to access the Google API.
     let token = result.credential.accessToken;
     // ...
     }
     // The signed-in user info.
     let user = result.user;
     console.log("user:", JSON.stringify(user));
     }
     }).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     // The email of the user's account used.
     var email = error.email;
     // The firebase.auth.AuthCredential type that was used.
     var credential = error.credential;
     // ...
     alert(error);
     })*/
    ;

    /**
     * We have appToken relevant for our backend API
     */
    if (localStorage.getItem(appTokenKey)) {
      console.log('history push /');
      this.props.history.push("/");
      return;
    }

    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signed in: ", JSON.stringify(user));

        localStorage.removeItem(firebaseAuthKey);

        // here you could authenticate with you web server to get the
        // application specific token so that you do not have to
        // authenticate with firebase every time a user logs in
        localStorage.setItem(appTokenKey, user.uid);

        // store the token
        this.props.history.push("/app/home")
      }
    });
  }
  render() {
    var { error } = this.state;

    return (
      <div className={classes.FormContainer}>
        <div className={classes.LoginFormContainer}>
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
              <p className={classes.Error}>
                {error.message}
              </p>
            ) : null}
            <p className={classes.Register}>Opps...don't have any account yet!
        <Link className={classes.RegisterLink} to="/register" >REGISTER HERE</Link>
            </p>
          </form>
        </div>
        <div className={classes.LoginDivider}>
          <div className={classes.Bar + ' ' + classes.BarTop}></div>
          <span className={classes.LoginOr}>OR</span>
          <div className={classes.Bar + ' ' + classes.BarBottom}></div>
        </div>
        <OtherLogins handleGoogleLogin={this.handleGoogleLogin} />
      </div>
    );
  };
}

export default withRouter(Login);
