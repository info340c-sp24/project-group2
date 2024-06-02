import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBFF2C76wNpsjt-pBsTNwfHQdb7RoHXxkE",
  authDomain: "rso-management.firebaseapp.com",
  databaseURL: "https://rso-management-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rso-management",
  storageBucket: "rso-management.appspot.com",
  messagingSenderId: "629871967842",
  appId: "1:629871967842:web:1c660569d6535de9439b3b"
};

const app = initializeApp(firebaseConfig);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIhNUq7wnnbRVbjZxsRcyB8x60plcfw20",
  authDomain: "rso-management-site.firebaseapp.com",
  projectId: "rso-management-site",
  storageBucket: "rso-management-site.appspot.com",
  messagingSenderId: "97041702901",
  appId: "1:97041702901:web:bf73c502618530e275cabc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
