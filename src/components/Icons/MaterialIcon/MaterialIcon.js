import React from 'react';

import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';

import HomeIcon from '../HomeIcon';
import SearchIcon from '../SearchIcon';
import GoogleIcon from './../GoogleIcon';
import FBIcon from './../Facebook';
import Logout from './../Logout';

import classes from './MaterialIcon.css';

// @TODO: CReate HOC

// function Home(props) {
//   return(
//     <SvgIcon {...props}>
//       <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//     </SvgIcon>
//   );
// }

function Icon(props) {
  let IconPath = (props) => {
    switch (props.type) {
      case 'home':
        return <HomeIcon />;
      case 'search':
        return <SearchIcon />;
      case 'google':
        return <GoogleIcon />;
      case 'fb':
        return <FBIcon />;
      case 'logout':
        return <Logout />;

      default:
        return <HomeIcon />;
    }
  }

  return (
    <SvgIcon {...props}>
      {IconPath(props)}
    </SvgIcon>
  );
};

function IconType(type, style) {
  switch (style) {
    case "primary":
      return <Icon className={classes.icon} type={type} color="primary" />

    case "secondary":
      return <Icon className={classes.icon} type={type} color="secondary" />

    case "action":
      return <Icon className={classes.icon} type={type} color="action" />

    case "error":
      return <Icon className={classes.Error} type={type} color="error" style={{ fontSize: 30 }} />

    case "disabled":
      return <Icon color="disabled" type={type} className={classes.icon} fontSize="large" />

    case "stylish":
      return <Icon
        className={classes.icon}
        color="primary"
        fontSize="large"
        type={type}
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
      return <Icon className={classes.icon} type={type} />

  }
};



function SvgIcons(props) {
  return (
    <div className={classes.Root + ' ' + props.className}>
      {
        IconType(props.type, props.iconStyle)
      }
    </div>
  );
}

export default SvgIcons;