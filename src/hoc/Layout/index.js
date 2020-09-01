import React, { Component } from 'react';

import Classes from './index.css';
import Toolbar from '../../Components/Toolbar/index';
import ProfileOverview from './../../Components/ProfileOverview';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverview: false
    };
  };

  toggleHandler = (e, buttonClick, hideOverview) => {
    if (hideOverview) {
      this.setState({showOverview: false});
    } else if (buttonClick || (!buttonClick && this.state.showOverview)) {
      this.setState({showOverview: !this.state.showOverview});
    }

    e && e.stopPropagation();
  }

  
  render() {
    const ContainerStyle = {
      left: this.state.showOverview ? '75%' : '0%',
      borderRadius: this.state.showOverview ? '40px' : '0',
      transform: `scale(${this.state.showOverview ? .85 : 1})`
    };
    return(
      <div className={Classes.Root}>
        <ProfileOverview showOverview={this.state.showOverview} authenticated={this.props.authenticated} hideOverview={this.toggleHandler}/>
        <div className={Classes.Container} style={ContainerStyle}   onClick={(e) => this.toggleHandler(e)}>
          <Toolbar {...this.props} profileOverviewToggle={this.toggleHandler} />
          <main className={Classes.Content}>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  };
}

export default Layout;
