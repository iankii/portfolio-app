import React, { Fragment } from 'react';

import Classes from './index.css';
import Toolbar from '../../Components/Toolbar/index';

const layout = (props) => (
  <Fragment>
    <Toolbar {...props}/>
    <main className={Classes.Content}>
      {props.children}
    </main>
  </Fragment>
)

export default layout;