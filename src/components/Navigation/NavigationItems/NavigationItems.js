import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

import HomeIcon from '../../Icons/HomeIcon/HomeIcon';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems + ' navbar-nav collapse navbar-collapse'} id="navbarSupportedContent">
      <NavigationItem link='/' exact>
        <HomeIcon />
        <span>Home</span>
      </NavigationItem>
      <NavigationItem link='/resume' >Build Your Resume</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
      
      <form className={classes.Form + " form-inline my-2 my-lg-0"}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  changeHandler={props.changeHandler}>Search</button>
      </form>
    </ul>
  );
}

export default NavigationItems;