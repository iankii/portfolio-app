import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
// import SubStack from './SubStack';

// import { NavLink } from 'react-router-dom';


import TechStack from './TechStack';
import Style from './index.css';

const DashboardHeader = (props) => {
  return (
    <div className={Style.dashboardHeader}>
      <TechStack />
      {/* <SubStack {...props} /> */}
      {/* Learning on the go… */}
    </div>
  );
}

export default DashboardHeader;