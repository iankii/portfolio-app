import React, {useState} from 'react';
import { withRouter, Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import clsx from 'clsx';
import { withTheme } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import classes from './index.css';
import Intro from './Intro/intro';
import Basics from './Basics';

import config from './config';

const TopicList = ({match}) => {
  const [isBack, setBack] = useState(true);  
  const [state, setState] = useState({
    // top: false,
    left: false,
    bottom: true,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // close on back nav or vice versa
    if (!open && isBack) {
      window.history.back();
      setState({ ...state, [anchor]: open });
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {config.htmlTopics.map((text, index) => {
          if (typeof text === 'object') {
            return (
              <NavLink activeClassName={classes.active} to={`${match.url}/${text.path}`} onClick={() => setBack(false)}>
                <ListItem button key={text.id} >
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItem>
              </NavLink>
            )
          }
          return <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        })}
      </List>
      <Divider />
      <List>
        {config.advanceHtmlTopic.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={`${classes.buttonContainer}`}>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button class={classes.topicButton} onClick={toggleDrawer(anchor, true)}><ListIcon />Open Topics</Button> */}
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
      {/* <Switch>
        <Route path='/frontend/html/basics' component={Intro} exact />
        <Route path='/frontend/html/intro' component={Basics} exact /> */}
        {/* <Route path='/backend' component={SubStack} />
        <Route path='/devops' component={SubStack} /> */}
      {/* </Switch> */}
    </div>
  );
}

export default withTheme(TopicList);