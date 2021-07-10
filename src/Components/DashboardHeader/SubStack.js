import React from 'react';
import {Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import config from './config';
import Classes from './index.css';

const SubStack = ({match}) => {
  const href = window.location.href;
  console.log(href);
  const subStacks = [];

  if (href.search('frontend') >= 0) {
    subStacks.push(...config.frontend);
  } else if (href.search('backend') >= 0) {
    subStacks.push(...config.backend);
  } else if (href.search('devops') >= 0) {
    subStacks.push(...config.devops);
  } else {
    return null;
  }

  return (
    <ul className={Classes.subStack} id="navbarSupportedContent">
      
      {subStacks.map((i, index) => {
        return (
          <li
            key={`${index}${i}`}
            className={'nav-item nav-link'}
            // onClick={props.onChange}
          >
            <NavLink to={`${match.url}/${i.toLowerCase()}`} activeClassName={Classes.active}>{i.toUpperCase()}</NavLink>
          </li>
        );
      })}
      
      {/* <Switch>
        <Route path={`${match.url}/html`} component={SubStack} />
        <Route path={`${match.url}/css`} component={PageNotFound} />
        <Route path={`${match.url}/js`} component={PageNotFound} />
      </Switch> */}
    </ul>
  );
}

export default SubStack;