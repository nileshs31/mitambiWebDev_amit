import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAO0bW8baQCnmSJnvJpx65vovE-6zcAufM",
  authDomain: "mitambiintership.firebaseapp.com",
  databaseURL: "https://mitambiintership-default-rtdb.firebaseio.com",
  projectId: "mitambiintership",
  storageBucket: "mitambiintership.appspot.com",
  messagingSenderId: "570116832924",
  appId: "1:570116832924:web:20fa201dfbb4ce1d4c7759"
});

var db = firebaseApp.firestore();

export { db };
