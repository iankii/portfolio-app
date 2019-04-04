import React from 'react';
import classes from './Dashboard.css';

import TutorialsTickets from './../TutorialsTickets/TutorialsTickets';
import Logout from '../../components/Logout/Logout';

const Dashboard = (props) => {
  return (<div className={classes.Dashboard}>
    <h1>Hi, I'm a react Dashboard!</h1>
    
    {props.authenticated ? <Logout /> : null}

    <div>Resume Builder Add</div>
    <div>blog Preview</div>
    <TutorialsTickets />
  </div>);
}

export default Dashboard;