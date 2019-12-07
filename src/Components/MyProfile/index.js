import React from 'react';

import AboutMe from './AboutMe/AboutMe';
import Professional from './Professional/Professional';
import Experience from './Experience/Experience';

import classes from './index.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className={classes.ContactContainer}>
        <AboutMe />
        <Professional />
        <Experience />
      </div>
    )
  }
}

export default AboutUs;