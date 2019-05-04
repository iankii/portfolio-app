import React from 'react';
import firebase from 'firebase';

import MaterialIcon from './../Icons/MaterialIcon/MaterialIcon';

import classes from './Logout.css';

const logOutUser = (props) => {
  firebase.auth().signOut();
};

const LogOut = (props) => {
  return (
    <button className={classes.Logout} onClick={() => logOutUser(props)}>
      <MaterialIcon type='logout'/>
    </button>
 ); 
 
};

export default LogOut;