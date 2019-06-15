import React from 'react';
import FacebookLogin from './socialLogins/FacebookLogin';

import './OtherLogins.css';
import classes from "./OtherLogins.css";
import GoogleLogin from './socialLogins/GoogleLogin';

const OtherLogins = (props) => {
  return (
    <>
      <ul className={classes.LoginSocialButtons}>
        <FacebookLogin {...props} />
        <li className={classes.OtherLoginItem}>
          <span className={classes.OtherLoginItemAnchor}>
            <i className="fa fa-github-alt" aria-hidden="true" />
          </span>
        </li>
        <GoogleLogin {...props} />
        <li className={classes.OtherLoginItem}>
          <span className={classes.OtherLoginItemAnchor}>
            <i className="fa fa-linkedin" aria-hidden="true" />
          </span>
        </li>
        <li className={classes.OtherLoginItem}>
          <span className={classes.OtherLoginItemAnchor}>
            <i className="fa fa-instagram" aria-hidden="true" />
          </span>
        </li>
      </ul>
      <p>Only Google Sign In is available for now...</p>
    </>
  )
}

export default OtherLogins;