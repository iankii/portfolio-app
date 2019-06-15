import React from 'react';
import { logout } from "./../../helpers/auth";


import MaterialIcon from './../Icons/MaterialIcon/MaterialIcon';

import classes from './Logout.css';

const logOutUser = (props) => {
  logout();
};

const LogOut = (props) => {
  return (
    <button className={classes.Logout} onClick={() => logOutUser(props)}>
      <MaterialIcon type='logout'/>
    </button>
 ); 
 
};

export default LogOut;