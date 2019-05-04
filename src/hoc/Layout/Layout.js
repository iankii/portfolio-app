import React from 'react';

import Aux from '../Auxl/Auxl';
import Classes from './Layout.css';
import Toolbar from '../../containers/Toolbar/Toolbar';

const layout = ( props ) => (
  <Aux>
    <Toolbar {...props}/>
    <main className={Classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;