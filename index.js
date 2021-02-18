import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase/app';
import 'firebase/firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyC2_gClVURm-2qtCnkVBjPB0fxuaWF2Mg0",
  authDomain: "cart-9206d.firebaseapp.com",
  projectId: "cart-9206d",
  storageBucket: "cart-9206d.appspot.com",
  messagingSenderId: "74456464533",
  appId: "1:74456464533:web:a71bc33416e91422a2af9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


