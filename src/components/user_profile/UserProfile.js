import React from 'react';
import './user_profile.scss';
import NavBar from '../nav_bar/NavBar';

const UserProfile = () => {
    return (
        <>
            <NavBar />
            <h3 className="userProfile__title">User Profile</h3>;
            <div className="userProfile__container">
                <p className="userProfile__container-p">User Name</p>
                <p className="userProfile__container-p">Email</p>
            </div>
        </>
    );
};

export default UserProfile;
