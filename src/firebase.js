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
  const firebaseMatches = firebaseDB.ref('matches');

<<<<<<< HEAD
  export {
          firebase,
          firebaseMatches
  }
=======
  firebaseDB.ref('matches').once('value').then((snapshot)=>{
          console.log(snapshot.val())
  })
>>>>>>> 35a03df21f6fd9503ac095936e32a07c6443417b
