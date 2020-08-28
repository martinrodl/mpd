import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: `${process.env.APP_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.APP_ID}.firebaseio.com`,
  projectId: process.env.APP_ID,
  storageBucket: `${process.env.APP_ID}.appspot.com`,
  messagingSenderId: '229179062842',
  appId: '1:229179062842:web:749cce1fecc7a35a679303',
  measurementId: 'G-KN3NQM2G80',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
