import React from 'react';

import './OtherLogins.css';
import classes from "./OtherLogins.css";

const OtherLogins = (props) => {
  return (
    <ul className={classes.LoginSocialButtons}>
      <li className={classes.OtherLoginItem}>
        <span className={classes.OtherLoginItemAnchor}>
          <i className="fa fa-facebook" aria-hidden="true" />
        </span>
      </li>
      <li  className={classes.OtherLoginItem}>
        <span className={classes.OtherLoginItemAnchor}>
          <i className="fa fa-github-alt" aria-hidden="true" />
        </span>
      </li>
      <li className={classes.OtherLoginItem} onClick={props.handleGoogleLogin}>
        <span className={classes.OtherLoginItemAnchor}>
          <i className="fa fa-google-plus" aria-hidden="true" />
        </span>
      </li>
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
  </ul>)
}

export default OtherLogins;