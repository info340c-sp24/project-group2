import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profilepopup.css';

const ProfilePopUp = ({ user, isOpen, onClose, onSignOut }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        if (onSignOut) {
        onSignOut();
        }
        navigate('/login');
    };

    return isOpen ? (
        <div className="profile-popup">
            <div className="profile-content">

                <div className="profile-picture-container">
                    <img src="img/noUser.jpg" alt="Profile" className="profile-picture" />
                </div>

                <h2>Jane Doe</h2>
                
                <div className="user-details">
                    <p>Role: Student</p>
                    <p>Username: nkanna</p>
                    <p>Email: nkanna@uw.edu</p>
                </div>

                <div className="button-container">
                    <button onClick={onClose}>Close</button>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>

            </div>
        </div>
    ) : null;
};

export default ProfilePopUp;