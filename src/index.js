import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebaseConfig'
import { BrowserRouter } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


