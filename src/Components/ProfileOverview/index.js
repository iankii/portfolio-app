import React from 'react';

import Classes from './index.css';

const ProfileOverview = (props) => {
  const style = {
    width: props.showOverview ? '160%' : '100%',
    color: props.showOverview ? 'red' : 'green'
  };

  return (
    <div className={Classes.Root} style={style}>
      Learning on the go…
    </div>
  );
}

export default ProfileOverview;