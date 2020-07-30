import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQBHrVlrr-NFgjMmAmQhoodVK45fEmI6U',
  authDomain: 'testapp-f7415.firebaseapp.com',
  databaseURL: 'https://testapp-f7415.firebaseio.com',
  projectId: 'testapp-f7415',
  storageBucket: 'testapp-f7415.appspot.com',
  messagingSenderId: '229179062842',
  appId: '1:229179062842:web:749cce1fecc7a35a679303',
  measurementId: 'G-KN3NQM2G80',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
