import React, { useState } from 'react';
import '../styles/calendar.css';
import { NavLink } from 'react-router-dom';
import ProfilePopUp from './profilepopup';
import { useSupabaseClient } from '@supabase/auth-helpers-react'; // Importing useSupabaseClient
import DateTimePicker from 'react-datetime-picker'; // Importing DateTimePicker
import { signOut } from 'firebase/auth';
import 'react-datetime-picker/dist/DateTimePicker.css';
import { useSession } from '@supabase/auth-helpers-react';

function InsertEvent() {
    const session = useSession();
    const supabase = useSupabaseClient();

    const [ start, setStart ] = useState(new Date());
    const [ end, setEnd ] = useState(new Date());
    const [ eventName, setEventName] = useState(new Date());
    const [ eventDescription, setEventDescription] = useState(new Date());

    const calendlyLink = "https://calendar.google.com/calendar/u/0?cid=YWsxNDI5QHV3LmVkdQ";

    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        });
        if (error) {
            alert("Error logging in to Google provider with Supabase");
            console.log(error);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
    }
    let url = '';
    if (session != null){
        url = "https://calendar.google.com/calendar/embed?src=" + session.user.email + "&ctz=America%2FChicago";
    }

    async function googleSignIn(){
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        });
        if(error) {
            alert("Error logging in to Google provider with Supabase");
            console.log(error);
        }
    }

    async function signOut(){
        await supabase.auth.signOut();
    }

  // console.log(session);

    async function createCalendarEvent() {
        const event = {
            'summary': eventName,
            'description': eventDescription,
            'start': {
                'dateTime': start.toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end': {
                'dateTime': start.toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        }
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
            method: "POST",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.provider_token
            },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json();
        }).then ((data) => {
            console.log(data);
            alert("Event created, cehck your Google Calendar")
        });
    }


    return  (
        
        <div className='addingEvent'>
            <div>
                <Section title="Google Calendar" className="calendly" link={calendlyLink} />
                <iframe src={url} style={{border: '0'}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
            </div>
            
            <div style={{width: '400px', margin: '30px auto'}}>
                {session ?
                    <>
                        <h2>Hey There {session.user.email}</h2>
                        {/* <p>Start your event</p> */}
                        {/* <DateTimePicker onChange={setStart} value={start} style={{ width: '100%' }} />
                        <p>End of event</p>
                        <DateTimePicker onChange={setEnd} value={end} style={{ width: '100%' }} />
                        <p>Event name</p>
                        <input type="text" onChange={(e) => setEventName(e.target.value)}/>
                        <p>Event Description</p>
                        <input type="text" onChange={(e) => setEventDescription(e.target.value)}/>
                        <button className="create-event-btn" onClick={() => createCalendarEvent()}> Create Calendar Event</button> */}
                        <button onClick={() => signOut()}>Sign Out</button>
                    </>
                    :
                    <>
                    <button onClick={() => googleSignIn()}>Sign In With Google</button>
                    </>
                }
                {/* <p>Start your event</p>
                <DateTimePicker onChange={setStart} value={start} style={{ width: '100%' }} />
                <p>End of event</p>
                <DateTimePicker onChange={setEnd} value={end} style={{ width: '100%' }} /> */}
                {/* <p>Event name</p>
                <input type="text" onChange={(e) => setEventName(e.target.value)}/>
                <p>Event Description</p>
                <input type="text" onChange={(e) => setEventDescription(e.target.value)}/>
                <button className="create-event-btn" onClick={() => createCalendarEvent()}> Create Calendar Event</button> */}
                <p>      </p>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    )
}

function NavBar({ title }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <nav>
            <div className="container">
                <h1 className='calendarName'>Calendar</h1>
            </div>
            <NavLink to="/homepage" className="home-icon" aria-label="Go to homepage">
                <span className="material-icons home-icon">home</span>
            </NavLink>
            <div className="nav-right">
                <div className="profile-icon" onClick={toggleProfile}>
                    <span className="material-icons">person</span>
                </div>
            </div>
            <ProfilePopUp isOpen={isProfileOpen} onClose={toggleProfile} >
                <div className="profile-content">
                    <h2>Niranjanaa Kannan</h2>
                    <p>Role: Student</p>
                    <p>Username: nkanna</p>
                    <p>Email: nkanna@uw.edu</p>
                </div>
            </ProfilePopUp>
        </nav>
    );
}

function Section({ title, className, link }) {
    return (
        <a href={link} className="section-link" target='_blank' rel='noopener noreferrer'>
            <div className={className}>
                <h2>{title}</h2>
            </div>
        </a>
    );
}

function Main() {
    const calendlyLink = "https://calendar.google.com/calendar/u/0?cid=YWsxNDI5QHV3LmVkdQ";

    return (
        <main>
            <InsertEvent />
        </main>
    );
}

function Footer() {
    return <footer></footer>;
}

function CalendarPage() {
    return (
        <>
            <NavBar title="Calendar" />
            <Main />
            <Footer />
        </>
    );
}

export default CalendarPage;