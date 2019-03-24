import React from 'react';

import classes from './ChartBar.css';

const Chartbar = (props) => {
  return (
    <div className={classes.SkillContainer}>
      <div className={classes.SkillName}>{props.name}</div>
      <div className={classes.SkillPercentageWrapper}><div className={classes.SkillPercentage} style={{width: props.percentage}}></div>{props.percentage}</div>
    </div>
  );
}

export default Chartbar;