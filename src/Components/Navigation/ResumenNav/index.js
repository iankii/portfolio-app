import React from 'react';

import classes from './index.css';

import NavItem from './../NavigationItems/templates/NavigationItem';

const resumenNav = () => {
  return(
    <ul>
      <NavItem link="/profile" classname={classes.ProfileLink}>Profile</NavItem>
      <NavItem link="/createResume" classname={classes.CreateResumeLink}>Create Your Resume</NavItem>
      <NavItem link="/lougout" classname={classes.Logout}>Logout</NavItem>
    </ul>
  );
}

export default resumenNav;