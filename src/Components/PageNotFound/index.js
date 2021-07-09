import React from 'react';
import error from './error-404.png';
import Style from './index.css';

const NotFound = () => (
  <div className={`${Style.logoSytle}`}>
    Oops! This page is in progress. You start lerning available resourcesand we'll catch up with you soon.😉
    <img src={error} alt="404-notfound" />
  </div>
);

export default NotFound;
