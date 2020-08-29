import React, {useState} from 'react';

import NavigationItems from "../Navigation/NavigationItems/index";
import MaterialIcon from '../../UtilityComponents/Icons/MaterialIcon/MaterialIcon';

import Logout from '../UserLogout/index';
import Avatar from './../Avatar';
import classes from './index.css';

function Toolbar (props) {
  const [showToolbarOverlay, toggleToolbar] = useState(false);

  const isHidden = showToolbarOverlay ? classes.NavbarMobile : classes.Hidden;

  const toggleNav = () => {
    toggleToolbar(!showToolbarOverlay);
  }
  
  return (
    <header className={classes.Toolbar}>
      <button className={classes.NoButton}  onClick={() => props.profileOverviewToggle()}>
        <Avatar src="/broken-image.jpg" />
      </button>
      <nav className={`${classes.Navbar} ${isHidden} navbar navbar-expand-md navbar-collapse`} id="navbarSupportedContent">
        <NavigationItems onChange={toggleNav} />
      </nav>

      <MaterialIcon type='search' iconStyle='stylish' className={classes.SearchIcon} />
      <button onClick={toggleNav} className={classes.customToggler + " navbar-toggler"} type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className={classes.customTogglerIcon + " navbar-toggler-icon"}></span>
      </button>

      {props.authenticated ? <Logout /> : null}
    </header>
  );
}

export default Toolbar;