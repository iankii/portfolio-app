import React, { Component } from 'react';


import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";
import MaterialIcon from './../../components/Icons/MaterialIcon/MaterialIcon';

import Logout from '../../components/Logout/Logout';

import classes from './Toolbar.css';
// import './Toolbar.css';

class Toolbar extends Component {

  toggleNav = (e) => {
    e.preventDefault();

    var main = document.getElementsByTagName('main')[0];
    var nav = document.getElementsByClassName(classes.Navbar)[0];
    var isHidden = nav.classList.contains(classes.Hidden);

    nav.classList.toggle(classes.NavbarMobile, isHidden);
    nav.classList.toggle(classes.Hidden, !isHidden);

    main.classList.toggle(classes.Hidden, isHidden);
  }

  render() {

    return (
      <header className={classes.Toolbar}>
        <div className={classes.Logo}>
          HOME
        </div>
        <nav className={classes.Navbar + ' ' + classes.Hidden + " navbar navbar-expand-md navbar-collapse"} id="navbarSupportedContent">
          <NavigationItems onChange={this.toggleNav}/>
        </nav>

        <MaterialIcon type='search' iconStyle='stylish' className={classes.SearchIcon}/>
        <button onClick={this.toggleNav} className={classes.customToggler + " navbar-toggler"} type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={classes.customTogglerIcon + " navbar-toggler-icon"}></span>
        </button>

        {this.props.authenticated ? <Logout /> : null}
      </header >
    );
  }
}

export default Toolbar;