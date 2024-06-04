import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebaseConfig';
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import 'bootstrap/dist/css/bootstrap.css'

const supabase = createClient(
  "https://qlquwbkuupywrvgppbiw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscXV3Ymt1dXB5d3J2Z3BwYml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0Mzc4NTAsImV4cCI6MjAzMzAxMzg1MH0.1Fx6OcSpN2WuSMGK9qqPFjQ-OEbHGJFyRSSCg7QoxTs"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SessionContextProvider supabaseClient={supabase}>
        <App />
      </SessionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


