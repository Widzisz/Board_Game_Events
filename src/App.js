import React from 'react';
import './App.scss';
import { useState, useEffect } from 'react';
// import { db } from './firebase';
import NavBar from './components/nav_bar/NavBar';
import WelcomePage from './components/welcome_page/WelcomePage';
import CreatUser from './components/creat_user/CreatUser';
import MainPage from './components/main_page/MainPage';
import CreatEvent from './components/creat_event/CreatEvent';
import UserProfile from './components/user_profile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/welcome-page" component={WelcomePage} />
                    <Route path="/creat-user" component={CreatUser} />
                    <Route path="/" exact component={MainPage} />
                    <Route path="/user-profile" component={UserProfile} />
                    <Route path="/creat-event" component={CreatEvent} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
