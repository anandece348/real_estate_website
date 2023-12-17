// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBH_gbfeVR2pAfUrvuUMv6cqTCjCh8gUE",
  authDomain: "real-estate-website-f8df5.firebaseapp.com",
  projectId: "real-estate-website-f8df5",
  storageBucket: "real-estate-website-f8df5.appspot.com",
  messagingSenderId: "971544309083",
  appId: "1:971544309083:web:724cee62ed7378d9defe7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, db, storage};
