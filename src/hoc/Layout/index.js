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

  toggleHandler = () => {
    this.setState({showOverview: !this.state.showOverview});
  }

  
  render() {
    const ContainerStyle = {
      left: this.state.showOverview ? '60%' : '0%',
    };
    return(
      <div>
        <ProfileOverview showOverview={this.state.showOverview} />
        <div className={Classes.Container} style={ContainerStyle}>
          <button onClick={this.toggleHandler}>test</button>
          <Toolbar {...this.props} showOverview={this.state.showOverview} />
          <main className={Classes.Content}>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  };
}

export default Layout;
