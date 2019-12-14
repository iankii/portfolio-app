import React from 'react';

import ChartBar from '../../../UtilityComponents/Chartbar/ChartBar';

import classes from './Professional.css';


const professional = ({animate}) => {
 return (
  <div className={`${classes.Professional} professional`} >
    <h2>
      <span className={classes.ProfileIndex}>01 </span>
      <span className="">PROFESSIONAL</span>
    </h2>
    <h3 className={classes.SkillsHeading}>MY KNOWLEDGE LEVEL IN SOFTWARE</h3>
    <div className="knowledge">
      <ChartBar name="JavaScript" percentage="75%" animate={animate} />
      <ChartBar name="CSS/LESS" percentage="75%" animate={animate} />
      <ChartBar name="jQuery" percentage="75%" animate={animate} />
      <ChartBar name="Redux" percentage="75%" animate={animate} />
      <ChartBar name="JADE/PUG/DUST" percentage="75%"  animate={animate} />
      <ChartBar name="HTML5" percentage="70%"  animate={animate} />
      <ChartBar name="Node Js" percentage="70%" animate={animate} />
      <ChartBar name="React Js" percentage="60%" animate={animate} />
      <ChartBar name="Angular" percentage="25%" animate={animate} />
      <ChartBar name="Java" percentage="20%" animate={animate} />
    </div>
  </div>)
}

export default professional;