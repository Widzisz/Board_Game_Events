import React from 'react';
import './user_profile.scss';
import NavBar from '../nav_bar/NavBar';
import { auth } from '../../firebase';

const UserProfile = props => {
    const handleLogout = () => {
        auth().signOut();
        props.history.push('./');
    };

    return (
        <>
            <NavBar />
            <h3 className="userProfile__title">User Profile</h3>;
            <div className="userProfile__container">
                <p className="userProfile__container-p">User Name</p>
                <p className="userProfile__container-p">Email</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
};

export default UserProfile;
