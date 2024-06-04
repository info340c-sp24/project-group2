import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import

import LoginPage from './pages/login';
import './styles/login.css';

import HomePage from './pages/homepage';
import './styles/homepage.css';

import ProfilePopUp from './pages/profilepopup';
import './styles/profilepopup.css';

import CalendarPage from './pages/calendar';
import './styles/calendar.css';

import MessagingPage from './pages/messaging';
import './styles/messaging.css';

import MediaPage from './pages/media';
import './styles/media.css';

// import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

function App() {
  // const session = useSession();
  // const supabase = useSupabaseClient();

  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSignOut = () => {
    setUser(null);
  };
  
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // async function googleSignIn(){
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       scopes: 'https://www.googleapis.com/auth/calendar'
  //     }
  //   });
  //   if(error) {
  //     alert("Error logging in to Google provider with Supabase");
  //     console.log(error);
  //   }
  // }

  // async function signOut(){
  //   await supabase.auth.signOut();
  // }

  // console.log(session);


  return (
    <>
      <div className="App">
        {/* <div style={{width: "400px", margin: "30px auto"}}>
          {session ?
            <>
              <h2>Hey there {session.user.email}</h2>
              <button onClick={() => signOut()}>Sign Out</button>
            </>
            :
            <>
            <button onClick={() => googleSignIn()}>Sign In With Google</button>
            </>
          }
        </div> */}
        <nav>
          <ProfilePopUp user={user} onSignOut={handleSignOut} isOpen={isProfileOpen} toggleProfile={toggleProfile} />
        </nav>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/messaging" element={<MessagingPage />} />
          <Route path="/media" element={<MediaPage />} />
        </Routes>
        <footer>
          <p>Copyright <span>&copy;</span> 2024. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;



