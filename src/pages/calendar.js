import React from 'react';
import '../styles/calendar.css';

function NavBar({ title, homeLinkUrl }) {
    return (
        <nav>
            <div className="container">
                <h1>{title}</h1>
            </div>
            <a href={homeLinkUrl} className="upper-left"><span className="material-icons" aria-label="Home">home</span></a>
        </nav>
    );
}

function Section({ title, className }) {
    return (
        <div className={className}>
            <h2>{title}</h2>
        </div>
    );
}

function Main() {
    return (
        <main>
            <Section title="Calendly" className="calendly" />
            <Section title="Google Calendar API Connected" className="rectangle-2" />
        </main>
    );
}

function Footer() {
    return <footer></footer>;
}

function Calendar() {
    return (
        <>
            <NavBar title="Calendar" homeLinkUrl="homepage.html" />
            <Main />
            <Footer />
        </>
    );
}

export default Calendar;