import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Avatar from './../Avatar';

import Settings from './Settings';
import Navigations from './Navigations';

import { doSignOut } from "../../helpers/auth";

import Classes from './index.css';

class ProfileOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavigations: true
    };
  }

  toggleView = () => {
    this.setState({isNavigations: !this.state.isNavigations});
  }

  
  logOutUser = (props) => {
    const appTokenKey = "appToken";
    this.props.hideOverview(undefined, undefined, true);
    doSignOut()
      .then(() => {
        console.log('logout!!!');
        localStorage.setItem(appTokenKey, null);
      });

  };

  render() {
    return (
      <div className={Classes.Root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Avatar />
            <Grid container item xs={9} spacing={3}>
              <Grid container item xs={12} spacing={3}>
                <Paper className={Classes.paperInheritBackground}>Ankit Pal</Paper>
              </Grid>
              <Grid container item xs={12} spacing={3}>
                {!this.state.isNavigations
                  ? <Paper  className={Classes.paperInheritBackground} onClick={this.toggleView}>
                    <DashboardIcon />
                    Profile Options
                  </Paper>
                  : <Paper  className={Classes.paperInheritBackground} onClick={this.toggleView}>
                    <SettingsApplicationsIcon />
                    Settings
                  </Paper>
                }

                {this.props.authenticated ? <Paper
                   className={Classes.paperInheritBackground}
                   onClick={this.logOutUser}
                >
                  <ExitToAppIcon />
                  Logout
                </Paper> : null}
              </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Divider className={Classes.divider} />
        <div className={Classes.Container}>
            <Slide  className={Classes.Container} direction="left" in={this.state.isNavigations} mountOnEnter unmountOnExit>
              <Navigations hideOverview={this.props.hideOverview} />
            </Slide>
            <Slide direction="right" in={!this.state.isNavigations} mountOnEnter unmountOnExit>
              <Settings toggleView={this.toggleView} />
            </Slide>
        </div>
      </div>
    );
  }
}

export default ProfileOverview;