import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import DashboardHeader from './../DashboardHeader';
import TopicList from './TopicList';

// import { NavLink } from 'react-router-dom';

// import TechStack from './../Dashboard/templates/TechStack';

const Html = (props) => {
  return (
    <div className="html">
      <DashboardHeader />
      <TopicList />

    </div>
  );
}

export default Html;