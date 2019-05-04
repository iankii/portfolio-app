import React, { Component } from 'react';

import classes from './ResumeBase.css';

import ResumenNav from './../../components/Navigation/ResumenNav/ResumeNav';

class ResumeBase extends Component {
  render() {
    return (
      <div className={classes.ResumeBase}>
        <h1>Hang on mate...Working on it!!!</h1>
        <ResumenNav />
      </div>
    );
  }
}

export default ResumeBase;
