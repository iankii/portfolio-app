import React from 'react';

import classes from './Profile.css';

const Profile = () => {
  return (
    <div className={classes.ProfileContainer}>
      <div className={classes.ProfileAvatar}>
        <div className={classes.Avatar}>New Avatar</div>
        <div className={classes.SocialLinks}>
          <div className={classes.SocialLink + ' fa fa-google'}>
          </div>
          <div className={classes.SocialLink + ' fa fa-linkedin'}>
          </div>
          <div className={classes.SocialLink + ' fa fa-facebook'}>
          </div>
          <div className={classes.SocialLink + ' fa fa-instagram'}>
          </div>
        </div>
      </div>
      <div className={classes.ProfileDetails}>
        <div>
          <input type="text" placeholder="First Name" defaultValue="Ankit" />
          <input type="text" placeholder="Last Name" defaultValue="Pal" />
        </div>
        <div>
          <input type="text" placeholder="Email Id" defaultValue="ankit.pal@gmail.com" />
        </div>
        <div>
          <input type="text" placeholder="Conatct Number" defaultValue="9457380534" />
        </div>
        <div>
          <textarea name="Summary" id="summary" cols="30" rows="5" placeholder="Write some resume summary" defaultValue="Summary"></textarea>
        </div>
        <div>
          Qualifications
        </div>
        <div>
          Experience
        </div>
      </div>
    </div>
  );
}

export default Profile;