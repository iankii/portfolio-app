import React from 'react';
import { doSignInWithGoogle, firebaseAuthKey } from "./../../../helpers/auth";


import classes from "./../OtherLogins.css";

const handleGoogleLogin = () => {
  doSignInWithGoogle()
    .then((user) => {
      console.log('after google sign in...', user)
    })
    .catch(function (error) {
      alert(error); // or show toast
      console.log(error)
      localStorage.removeItem(firebaseAuthKey);
    });
  localStorage.setItem(firebaseAuthKey, "1");
}

const GoogleLogin = (props) => {
  return (
    <li className={classes.OtherLoginItem} onClick={handleGoogleLogin}>
      <span className={classes.OtherLoginItemAnchor}>
        <i className="fa fa-google-plus" aria-hidden="true" />
      </span>
    </li>)
}

export default GoogleLogin;