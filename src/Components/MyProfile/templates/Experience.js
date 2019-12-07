import React from 'react';
import ExperienceDetails from './ExperienceDetails';

import classes from './Experience.css';

const experience = () => {
  const RightContainer = classes.Container + ' ' + classes.Right;
  const LeftContainer = classes.Container + ' ' + classes.Left;
  return (
    <div className={classes.ExperienceWrapper}>
      <div className={classes.Experience}>
        <h2 className={classes.ExperienceTittle}>
          <span className={classes.ProfileIndex}>02 </span>
          <span className="">EXPERIENCE</span>
        </h2>
        <div className={classes.Timeline}>
          <ExperienceDetails className={LeftContainer} contentClass={classes.Content} index="1" year="2019-" company="Amdocs" designation="Web Developer" description="Working with Amodcs Core team to develop new products." technologies="ReactJs, JavaScript, HTML5, CSS3, Node Js."/>
          <ExperienceDetails className={RightContainer} contentClass={classes.Content} index="2" year="2016-2019" company="Cognizant" designation="Web Developer" description="Worked for one the Top US Bank to develop their website." technologies="JavaScript, jQuery, HTML5, CSS3, Jade/Dust, ReactJs, Node Js."/>
        </div>
      </div>
    </div>
  );
}

export default experience;