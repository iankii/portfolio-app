import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

import HomeIcon from '../../Icons/HomeIcon/HomeIcon';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        <HomeIcon />
        <span>Home</span>
      </NavigationItem>
      <NavigationItem link='/resume' >Build Your Resume</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
  );
}

export default NavigationItems;