import React from 'react';

import ChartBar from '../../GlobalComponents/Chartbar/ChartBar';

import classes from './Professional.css';

const professional = () => {
 return (
  <div className={classes.Professional} >
    <h2>
      <span className={classes.ProfileIndex}>01 </span>
      <span className="">PROFESSIONAL</span>
    </h2>
    <h3 className={classes.SkillsHeading}>MY KNOWLEDGE LEVEL IN SOFTWARE</h3>
    <div className="knowledge">
      <ChartBar name="JavaScript" percentage="80%"/>
      <ChartBar name="CSS/LESS" percentage="75%"/>
      <ChartBar name="jQuery" percentage="75%"/>
      <ChartBar name="Redux" percentage="75%"/>
      <ChartBar name="JADE/PUG/DUST" percentage="75%"/>
      <ChartBar name="HTML5" percentage="70%"/>
      <ChartBar name="Node Js" percentage="70%"/>
      <ChartBar name="React Js" percentage="60%"/>
      <ChartBar name="Angular" percentage="25%"/>
      <ChartBar name="Java" percentage="20%"/>
    </div>
  </div>)
}

export default professional;