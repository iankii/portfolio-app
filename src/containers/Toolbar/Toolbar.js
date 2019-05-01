import React, { Component } from 'react';

import classes from './Toolbar.css';

import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";

import './Toolbar.css';

class Toolbar extends Component {
  constructor() {
    super();
    this.state = {
      navOpened: false
    };
  }

  toggleNav = (e) => {
    e.preventDefault();
    // setTimeout(() => {
      this.setState({
        navOpened: !this.state.navOpened
      });
      console.log('hi');
    // }, 500);
  }

render() {
  let navOpenClass = this.state.navOpened ? classes.NavbarMobile : classes.Hidden;

  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        HOME
        </div>
      <nav className={navOpenClass + " navbar navbar-expand-md navbar-collapse"} id="navbarSupportedContent">
        <NavigationItems />
      </nav>
      <button onClick={this.toggleNav} className={classes.customToggler + " navbar-toggler"} type="button"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={classes.customTogglerIcon + " navbar-toggler-icon"}></span>
      </button>
    </header>
  );
}
}

export default Toolbar;