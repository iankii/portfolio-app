import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    console.log('Hello!');
    console.log('Are you here for the source code?');
    console.log('Don\'t waste your time digging minified code.');
    console.log('Just send mail to anonymouscoder8@gmail.com. I\'ll send you finished version.');
    console.log('Have a nice day. Cheers');
    return (
      <Layout>
        <Switch>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
