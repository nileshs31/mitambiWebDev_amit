import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
