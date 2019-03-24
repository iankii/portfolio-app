import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = () => {
 return (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/'>Home</NavigationItem>
    <NavigationItem link='/resume'>Build Your Resume</NavigationItem>
    <NavigationItem link="contact">Contact</NavigationItem>
    <NavigationItem link='login'>Login</NavigationItem>
  </ul>
 );
}

export default NavigationItems;