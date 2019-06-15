import firebase from 'firebase';

const config = {
  authDomain: "https://portfolio-app-5ad6d.firebaseapp.com",
  apiKey: 'AIzaSyCseKHO63vj1ieKIgmpopb8Rau0ka5b_Lw',
  projectId: 'portfolio-app-5ad6d',
  storageBucket: '',
};

firebase.initializeApp(config);

export default firebase;

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;