import React from 'react';

import NavigationItem from './templates/NavigationItem';
import MaterialIcon from '../../../UtilityComponents/Icons/MaterialIcon/MaterialIcon';
import SearchForm from './../../SearchBox/index';

import classes from './index.css';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems + ' navbar-nav collapse navbar-collapse'} id="navbarSupportedContent">
      <NavigationItem link='/' onChange={props.onChange} exact>
        <MaterialIcon type='home' />
        <span>Home</span>
      </NavigationItem>
      <NavigationItem link='/create-profile' onChange={props.onChange}>Build Your Resume</NavigationItem>
      <NavigationItem link="/contact" onChange={props.onChange}>Contact</NavigationItem>
      <SearchForm />
    </ul>
  );
}

export default NavigationItems;