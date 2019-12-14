import React from 'react';

import classes from './ChartBar.css';

const Chartbar = ({animate, name, percentage}) => {
  const animateWidth = animate ? percentage : '0%';
  return (
    <div className={`${classes.SkillContainer}`}>
      <div className={classes.titles}>
        <div className={classes.SkillName}>{name}</div>
        <div className={classes.Percentage}>{percentage}</div>
      </div>
      <div className={classes.SkillPercentageWrapper}>
        <div className={`${classes.SkillPercentage} ${classes.animate}`} style={{width: animateWidth}}></div>
      </div>
    </div>
  );
}

export default Chartbar;