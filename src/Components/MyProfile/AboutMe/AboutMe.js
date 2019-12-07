import React from 'react';

import classes from './AboutMe.css';

const aboutMe = () => {
  const classForAboutMeWithCenter = classes.AboutMe + ' ' + classes.Center;
  const classForHello = classes.Slabtext + ' ' + classes.Hello + ' ' + classes.NoMargin;
  const classForName = classes.Slabtext + ' ' + classes.Name;
  const classForRole = classes.Slabtext + ' ' + classes.Role;
  const classForIntro = classes.Slabtext + ' ' + classes.Intro;
  const FirstIntro = classes.Slabtext + ' ' + classes.FirstIntro;
  const SecondIntro = classes.Slabtext + ' ' + classes.SecondIntro;
  const introNoMarginCenter = classes.NoMargin + ' ' + classes.Intro + ' ' + classes.Center;

  return (
    <div className={classForAboutMeWithCenter}>
      <h1 className={classForHello}>
        <span className={classes.Slabtext} >HELLO</span>
      </h1>
      <p className={introNoMarginCenter}>
        <span className={classForName}>I'M ANKIT</span><br />
        <span className={classForRole}>I'M A CREATIVE WEB DEVELOPER</span><br />
        <span className={classForIntro}>I STAND ON A SWEET SPOT WHERE</span>
        <span className={FirstIntro}>
          <strong className={classes.Blue}>DESIGN</strong> 
          &amp;
          <strong className={classes.Blue}>CODE</strong>
        </span>
        <span className={SecondIntro}>INTERSECTS.</span>
      </p>
      <p className={introNoMarginCenter}>Feel free to contact me : <a href="mailto:anonymouscoder8@gmail.com">anonymouscoder8@gmail.com</a> </p>
    </div>);
}

export default aboutMe;