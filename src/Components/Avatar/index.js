import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import Classes from './index.css';

function AvatarIcon() {
  return (
    <div className={Classes.Avatar}>
      {/* <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange}>
        B
      </Avatar>
      <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange} /> */}
      <Avatar src="/broken-image.jpg" />
    </div>
  );
}


export default AvatarIcon;