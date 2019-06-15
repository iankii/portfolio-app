import React, { Component } from 'react';
import Profile from './../../components/Profile/Profile';
import classes from './ResumeBase.css';

import ResumenNav from './../../components/Navigation/ResumenNav/ResumeNav';

class ResumeBase extends Component {
  constructor() {
    super();

    this.state = {
      userData: {}
    };
  }

  render() {
    return (
      <div className={classes.ResumeBase}>
        <h1>Hang on mate...Working on it!!!</h1>
        <ResumenNav />
        <Profile />
      </div>
    );
  }
}

export default ResumeBase;
