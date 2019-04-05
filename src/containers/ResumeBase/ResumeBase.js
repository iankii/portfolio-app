import React, { Component } from 'react';

import classes from './ResumeBase.css';

import ResumenNav from './../../components/Navigation/ResumenNav/ResumeNav';

class ResumeBase extends Component {
  render() {
    return (
      <div className={classes.ResumeBase}>
        <h1>Hi, I'm a react ResumeBase!</h1>
        <ResumenNav />
      </div>
    );
  }
}

export default ResumeBase;
