import React, {useState} from 'react';

import AboutMe from './templates/AboutMe';
import Professional from './templates/Professional';
import Experience from './templates/Experience';

import classes from './index.css';

const AboutUs = () => {
  const [animate, setAnimate] = useState(true);
  const [animateHeight, setAnimateHeight] = useState(true);

  document.onscroll = () => {
    setAnimateHeight(document.documentElement.scrollTop >= 850)
    setAnimate(document.documentElement.scrollTop >= 0);
  };
  
  const setAimations = () => {
    // setAnimate(true);
  }

  return (<div className={classes.ContactContainer}>
          <AboutMe />
          <Professional animate={animate} setAimations={setAimations}/>
          <Experience animateHeight={animateHeight} />
        </div>);
}

export default AboutUs;