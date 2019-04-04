import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import firebase from './firebase';

import Layout from './hoc/Layout/Layout';
import Contact from './containers/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

class App extends Component {
  state = {
    authenticated: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
    });
  }

  componentWillUnmount() {
  }

  render() {
    var authenticated = this.state.authenticated;

    return (
      <Layout >
        <Switch>
          <Route path='/contact' component={Contact}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <ProtectedRoute authenticated={authenticated} path="/resume" component={Contact} />
          <Route
            path='/'
            authenticated={authenticated}
            render={(props) => <Dashboard authenticated={authenticated}/> }
          />
          
        </Switch>
      </Layout>
    );
  }
}

export default App;
