import React, {useState} from 'react';

import AboutMe from './templates/AboutMe';
import Professional from './templates/Professional';
import Experience from './templates/Experience';

import classes from './index.css';


import professionalClasses from './templates/Professional.css';
import experienceClasses from './templates/Experience';

// const classes = {...indexClasses, ...professionalClasses, ...experienceClasses};
const AboutUs = () => {
  const [animate, setAnimate] = useState(false);
  const [animateHeight, setAnimateHeight] = useState(false);

  document.onscroll = () => {
    setAnimateHeight(document.documentElement.scrollTop >= 850)
    setAnimate(document.documentElement.scrollTop >= 150);
  };

  return (<div className={classes.ContactContainer}>
          <AboutMe />
          <Professional animate={animate} />
          <Experience animateHeight={animateHeight} />
        </div>);
}

export default AboutUs;