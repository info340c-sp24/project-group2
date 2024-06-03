import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
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

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error('Failed to enable persistence: Multiple tabs open');
    } else if (err.code === 'unimplemented') {
      console.error('Failed to enable persistence: Browser does not support all required features');
    }
  });

export { auth, db, storage };
