import React from 'react';

import AboutMe from './../../components/contact/AboutMe/AboutMe';
import Professional from './../../components/contact/Professional/Professional';
import Experience from './../../components/contact/Experience/Experience';

import classes from './Contact.css';
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