import React from 'react';
import classes from "./../OtherLogins.css";

import { doSignInWithFacebook, firebaseAuthKey } from "./../../../helpers/auth";

const handleFacebookLogin = () => {
  doSignInWithFacebook()
    .then(socialAuthUser => {
      console.log('logged in with fb', socialAuthUser);
      this.props.history.push('/');
    })
    .catch(error => {
      console.log('error', error)
    });

}

const FacebookLogin = (props) => {
  return (
    <li className={classes.OtherLoginItem} onClick={handleFacebookLogin}>
      <span className={classes.OtherLoginItemAnchor}>
        <i className="fa fa-facebook" aria-hidden="true" />
      </span>
    </li>
  )
}

export default FacebookLogin;