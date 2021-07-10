import React from 'react';
import { withRouter, Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import SubStack from './SubStack';
import classes from './index.css';

const TechStack = ({match}) => {
  const {path, url} = useRouteMatch;
  const onChange = (e) => {}

  return (
    <>
      <ul className={`${classes.techStack}`} id="navbarSupportedContent">
        <li 
          className={'nav-item nav-link'}
          onClick={onChange}
        >
          <NavLink 
          activeClassName={classes.active} to={`/frontend`}>Frontend</NavLink>
        </li>
        <li className={'nav-item nav-link'} onClick={onChange}>
            <NavLink 
          activeClassName={classes.active} to={`/backend`}>Backend</NavLink>
        </li>
        <li className={'nav-item nav-link'} onClick={onChange}>
            <NavLink 
          activeClassName={classes.active} to={`/devops`}>DevOps</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path='/frontend' component={SubStack} />
        <Route path='/backend' component={SubStack} />
        <Route path='/devops' component={SubStack} />
      </Switch>
    </>
  );
}

export default withRouter(TechStack);