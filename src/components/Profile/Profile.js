import React from 'react';

import classes from './Profile.css';

const Profile = () => {
  return (
    <div className={classes.ProfileContainer}>
      <div className={classes.ProfileAvatar}>
        <div className={classes.Avatar}>Avatar</div>
        <div className={classes.SocialLinks}>SocialLinks</div>
      </div>
      <div className={classes.ProfileDetails}>
        details
      </div>
    </div>
  );
}

export default Profile;