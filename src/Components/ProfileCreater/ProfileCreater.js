import React, { Component } from 'react';
import Profile from './../UserProfile/Profile';
import classes from './ProfileCreater.css';

import ResumenNav from '../../Components/Navigation/ResumenNav/ResumeNav';

class ProfileCreater extends Component {
  constructor() {
    super();

    this.state = {
      userData: {}
    };
  }

  render() {
    return (
      <div className={classes.ProfileCreater}>
        <h1>Hang on mate...Working on it!!!</h1>
        <ResumenNav />
        <Profile />
      </div>
    );
  }
}

export default ProfileCreater;
