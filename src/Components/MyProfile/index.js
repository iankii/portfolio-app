import React from 'react';

import AboutMe from './templates/AboutMe';
import Professional from './templates/Professional';
import Experience from './templates/Experience';

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