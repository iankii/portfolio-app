import React from 'react';

import classes from './TutorialsTicket.css';

const TutorialsTickets = (props) => {
  return (
    <div className={classes.TutorialsTicket}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default TutorialsTickets;