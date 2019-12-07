import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import classes from './Dashboard.css';

import TutorialsTickets from '../TutorialsTickets/TutorialsTickets';
import MiniCards from '../MiniCards/MiniCards';
import DashboardHeader from "./templates/dashboardHeader";

// {props.authenticated ? <h1> authenticated</h1> : <h1>not authenticated</h1>}
const Dashboard = (props) => {
  return (<div className={classes.Dashboard}>
    <DashboardHeader />
    <TutorialsTickets />
    <div className={classes.ResumeBuilderLink}>
      <NavLink exact={props.exact} to='/create-profile' activeClassName={classes.active}>Checkout our Resume Builder!!</NavLink>
    </div>
    <MiniCards />
  </div>);
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.commonReducer.authenticated
  }
}

export default connect(mapStateToProps)(Dashboard);
// export default Dashboard;