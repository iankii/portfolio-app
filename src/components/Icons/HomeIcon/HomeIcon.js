import React from 'react';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';

import classes from './HomeIcon.css';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

function IconType(param) {
  switch(param) {
    case "primary":
      return <HomeIcon className={classes.icon} color="primary" />

    case "secondary":
      return <HomeIcon className={classes.icon} color="secondary" />

    case "action":
      return <HomeIcon className={classes.icon} color="action" />
      
    case "error":
      return <HomeIcon className={classes.iconHover} color="error" style={{ fontSize: 30 }} />
      
    case "disabled":
      return <HomeIcon color="disabled" className={classes.icon} fontSize="large" />
      
    case "stylish":
      return <HomeIcon
      className={classes.icon}
          color="primary"
          fontSize="large"
          component={svgProps => (
            <svg {...svgProps}>
              <defs>
              <linearGradient id="gradient1">
              <stop offset="30%" stopColor={blue[400]} />
                  <stop offset="70%" stopColor={red[400]} />
                  </linearGradient>
                  </defs>
                  {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
            </svg>
            )}
        />
      
    default:
      return <HomeIcon className={classes.icon} />
      
  }
};

function SvgIcons(props) {
  return (
    <div className={classes.root}>
    {
      IconType(props.type)
    }
    </div>
  );
}

export default SvgIcons;