import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => {

  return (
    <li
      className={(props.classname ? props.classname : classes.NavigationItem) + ' nav-item nav-link'}
      >
      <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName={classes.active}
      >{props.children}</NavLink>
    </li>
  );
}

export default navigationItem;