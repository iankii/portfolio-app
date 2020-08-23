import React from 'react';

import Classes from './index.css';

const ProfileOverview = (props) => {
  const style = {
    width: props.showOverview ? '160%' : '100%',
    color: props.showOverview ? 'red' : 'green'
  };

  return (
    <div className={Classes.Root} style={style}>
      Profile Details will come here
    </div>
  );
}

export default ProfileOverview;