const Routes = {
  'CONTACT': '/contact',
  'REGISTER': '/register',
  'LOGIN': '/login',
  'PROFILE': '/profile',
  'CREATE_PROFILE': '/create-profile',
  'HTML': '/frontend/html',
  'CSS': '/frontend/css',
  'JS': '/frontend/javascript',
};

// import MyProfile from '../app-modules/my-profile/index';
// import Login from '../app-modules/user-login/Login';
// import Register from '../app-modules/user-registeration/Register';
// import Dashboard from '../app-modules/app-dashboard/Dashboard';
// import ProfileCreater from '../app-modules/profile-creater/ProfileCreater';
// import Profile from '../app-modules/user-profile/Profile';

// import ProtectedRoute from '../hoc/ProtectedRoute/ProtectedRoute';

// const Routes = (props) => {
//   const authenticated = props.authenticated;

//   return (
//     <Switch>
//       <Route path={PATHS.CONTACT} component={MyProfile} />
//       <Route path={PATHS.REGISTER} component={Register} />
//       <Route path={PATHS.LOGIN} component={Login} />
//       <Route path={PATHS.PROFILE} component={Profile} />
//       <ProtectedRoute authenticated={authenticated} path={PATHS.CREATE_PROFILE} component={ProfileCreater} />
//       <Route exact path='/' authenticated={authenticated} render={(props) => <Dashboard authenticated={authenticated} />} />
//     </Switch>
//   )
// }

export default Routes;