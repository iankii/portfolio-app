import React from 'react';

import Avatar from './../Avatar';

import classes from './index.css';

const Profile = () => {
  return (
    <div className={classes.ProfileContainer}>
      <div className={classes.ProfileAvatar}>
        <Avatar CustomClass={classes.CustomAvatar} />
        {/* <div className={classes.CustomAvatar}>New Avatar</div> */}
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
          <input type="text" placeholder="First Name" defaultValue="FirstName" />
          <input type="text" placeholder="Last Name" defaultValue="LastName" />
        </div>
        <div>
          <input type="text" placeholder="Email Id" defaultValue="test@testing.com" />
        </div>
        <div>
          <input type="text" placeholder="Conatct Number" defaultValue="9874561230" />
        </div>
        <div>
          <textarea name="Summary" id="summary" cols="30" rows="5" placeholder="Write some resume summary" defaultValue="Development, Stiil in progress...;)"></textarea>
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