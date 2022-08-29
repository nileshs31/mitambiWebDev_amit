
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  
const firebaseConfig = {
  apiKey: "AIzaSyAO0bW8baQCnmSJnvJpx65vovE-6zcAufM",
  authDomain: "mitambiintership.firebaseapp.com",
  databaseURL: "https://mitambiintership-default-rtdb.firebaseio.com",
  projectId: "mitambiintership",
  storageBucket: "mitambiintership.appspot.com",
  messagingSenderId: "570116832924",
  appId: "1:570116832924:web:20fa201dfbb4ce1d4c7759"
};

 
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();
export { app,db,auth};
