import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAIhNUq7wnnbRVbjZxsRcyB8x60plcfw20",
  authDomain: "rso-management-site.firebaseapp.com",
  projectId: "rso-management-site",
  storageBucket: "rso-management-site.appspot.com",
  messagingSenderId: "97041702901",
  appId: "1:97041702901:web:bf73c502618530e275cabc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
