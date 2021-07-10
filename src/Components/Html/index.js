import React from 'react';
import DashboardHeader from './../DashboardHeader';
import Dashboard from './../Dashboard';
import TopicList from './TopicList';

// import { NavLink } from 'react-router-dom';

// import TechStack from './../Dashboard/templates/TechStack';

const Html = (props) => {
  return (
    <div className="html">
      <TopicList {...props}/>
      <Dashboard />

    </div>
  );
}

export default Html;