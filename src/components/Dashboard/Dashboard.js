import React from 'react';
import classes from './Dashboard.css';

import TutorialsTickets from './../TutorialsTickets/TutorialsTickets';
// import Logout from '../../components/Logout/Logout';
import MiniCards from '../MiniCards/MiniCards';

// {props.authenticated ? <Logout /> : null}
const Dashboard = (props) => {
  return (<div className={classes.Dashboard}>
    <h1>Hi, I'm a react Dashboard!</h1>
    <div>Resume Builder Add</div>
    <div>blog Preview</div>
    <TutorialsTickets />
    <MiniCards />
  </div>);
}

export default Dashboard;