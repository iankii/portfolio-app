import React from 'react';
import firebase from 'firebase';

const logOutUser = (props) => {
 firebase.auth().signOut();
//  props.logout();
};

const LogOut = (props) => {
 return <button onClick={() => logOutUser(props)}>LOGOUT</button>;
};

export default LogOut;