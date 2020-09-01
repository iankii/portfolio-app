import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import DefaulImage from './../../assets/images/DefaultAvatar.PNG';

import Classes from './index.css';

function AvatarIcon({CustomClass}) {
  return (
    <div className={Classes.Avatar}>
      <Avatar src={DefaulImage} className={CustomClass} />
    </div>
  );
}


export default AvatarIcon;