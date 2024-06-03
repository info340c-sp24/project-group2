import React, { useState } from 'react';
import '../styles/calendar.css';
import { NavLink } from 'react-router-dom';
import ProfilePopUp from './profilepopup';

function NavBar({ title }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <nav>
            <div className="container">
                <h1>{title}</h1>
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
                    <h2>Jane Doe</h2>
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
            <Section title="Google Calendar" className="calendly" link={calendlyLink} />
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&src=YWsxNDI5QHV3LmVkdQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" style={{border:'solid 1px #777'}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
            {/*<Section title="Google Calendar API Connected" className="rectangle-2" />*/}
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