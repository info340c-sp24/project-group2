import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profilepopup.css';
import { signOut } from 'firebase/auth';

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
                    <img src="img/noUser.jpg" alt="Profile Picture" className="profile-picture" />
                </div>

                <h2>{user ? user.name : 'Jane Doe'}</h2>

                <div className="user-details">
                    <p>{user ? user.title : 'Role'}: Student</p>
                    <p>{user ? user.username : 'Username'}: nkanna</p>
                    <p>{user ? user.email : 'Email'}: nkanna@uw.edu</p>
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