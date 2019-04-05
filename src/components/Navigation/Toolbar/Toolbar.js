import React from 'react';

import classes from './Toolbar.css';

import NavigationItems from './../NavigationItems/NavigationItems';

const toolbar = () => {
 return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        HOME
      </div>
      <div className={classes.MiddleNav}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <div className={classes.MobileActions}></div>
    </header>
 );
}

export default toolbar;