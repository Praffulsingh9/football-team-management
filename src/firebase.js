import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDrp4nZIGWC4LLW7Hysuul2I7I9Be4JffE",
    authDomain: "m-city-e891f.firebaseapp.com",
    databaseURL: "https://m-city-e891f.firebaseio.com",
    projectId: "m-city-e891f",
    storageBucket: "m-city-e891f.appspot.com",
    messagingSenderId: "896990184268"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value').then((snapshot)=>{
          console.log(snapshot.val())
  })