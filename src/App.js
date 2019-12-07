import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

import firebase from './firebase';

import Layout from './hoc/Layout/Layout';

import MyProfile from './Components/MyProfile/index';
import Login from './Components/UserLogin/Login';
import Register from './Components/UserRegisteration/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import ProtectedRoute from './hoc/ProtectedRoute/ProtectedRoute';
import ProfileCreater from './Components/ProfileCreater/ProfileCreater';
import Profile from './Components/UserProfile/Profile';
import Mappers from "./ConnectMappers/ConnectMappers";

import './App.css';

import Routes from './routes/appRoutes';

const {mapStateToProps, mapDispatchToProps} = Mappers;

class App extends Component {
  state = {
    authenticated: false
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

      this.props.updateAuthentication(authenticated);
    });
  }

  render() {
    var authenticated = this.props.authenticated;

    return (
      <Layout authenticated={authenticated}>
        <Switch>
          <Route path={Routes.CONTACT} component={MyProfile} />
          <Route path={Routes.REGISTER} component={Register} />
          <Route path={Routes.LOGIN} component={Login} />
          <Route path={Routes.PROFILE} component={Profile} />
          <ProtectedRoute authenticated={authenticated} path={Routes.CREATE_PROFILE} component={ProfileCreater} />
          <Route exact path='/' authenticated={authenticated} component={Dashboard} />
        </Switch>
      </Layout>
    );
  }
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     updateAuthentication: (authenticated) => {
//       dispatch({
//         type: 'UPDATE_AUTHENTICATION',
//         payload: authenticated
//       })
//     }
//   }
// }

// function mapStateToProps(state) {
//   return {
//     authenticated: state.commonReducer.authenticated
//   }
// }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
// export default withRouter(connect()(App));