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

  toggleHandler = (hideOverview) => {
    this.setState({showOverview: !this.state.showOverview});
  }

  
  render() {
    const ContainerStyle = {
      left: this.state.showOverview ? '75%' : '0%',
      borderRadius: this.state.showOverview ? '40px' : '0',
      transform: `scale(${this.state.showOverview ? .85 : 1})`
    };
    return(
      <div className={Classes.Root}>
        <ProfileOverview showOverview={this.state.showOverview} />
        <div className={Classes.Container} style={ContainerStyle}   onClick={() => this.toggleHandler(true)}>
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
