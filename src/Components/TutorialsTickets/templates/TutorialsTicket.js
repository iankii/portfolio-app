import React from 'react';

import classes from './TutorialsTicket.css';

const TutorialsTickets = (props) => {
  const onClick = () => {
    window.location.replace(props.goto);
  }
  return (
    <div className={classes.TutorialsTicket} onClick={onClick}>
      <h3 className={classes.Title}><a href={`${props.goto}`}>{props.title}</a></h3>
      <p>{props.content}</p>
    </div>
  );
}

export default TutorialsTickets;