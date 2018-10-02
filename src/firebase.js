import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

// Get your credentials feom firebase
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value').then((snapshot)=>{
          console.log(snapshot.val())
  })
