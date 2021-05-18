import React from 'react';
import './main_page.scss';
import Logo from './Logo';
import NavBar from './NavBar';
import LogoUser from './LogoUser';
import EventsList from './EventsList';

const MainPage = () => {
    return (
        <>
            <div className="nav__container">
                <Logo />
                <NavBar />
                <LogoUser />
            </div>
            <EventsList />
        </>
    );
};

export default MainPage;
