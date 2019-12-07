import React, { Fragment } from 'react';

import Classes from './Layout.css';
import Toolbar from '../../Components/Toolbar/Toolbar';

const layout = (props) => (
  <Fragment>
    <Toolbar {...props}/>
    <main className={Classes.Content}>
      {props.children}
    </main>
  </Fragment>
)

export default layout;