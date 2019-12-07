import React from 'react';
import { doSignOut } from "../../helpers/auth";


import MaterialIcon from '../../UtilityComponents/Icons/MaterialIcon/MaterialIcon';

import classes from './index.css';

const appTokenKey = "appToken";

const logOutUser = (props) => {
  doSignOut()
    .then(() => {
      console.log('logout!!!');
      localStorage.setItem(appTokenKey, null);
    });

};

const LogOut = (props) => {
  return (
    <button className={classes.Logout} onClick={() => logOutUser(props)}>
      <MaterialIcon type='logout'/>
    </button>
 ); 
 
};

export default LogOut;