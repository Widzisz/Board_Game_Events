import React from 'react';
import './App.scss';
import { useState, useEffect } from 'react';
// import { db } from './firebase';
import NavBar from './components/nav_bar/NavBar';
import WelcomePage from './components/welcome_page/WelcomePage';
import CreateUser from './components/create_user/CreateUser';
import MainPage from './components/main_page/MainPage';
import CreateEvent from './components/create_event/CreateEvent';
import UserProfile from './components/user_profile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/welcome-page" component={WelcomePage} />
                    <Route path="/create-user" component={CreateUser} />
                    <Route path="/" exact component={MainPage} />
                    <Route path="/user-profile" component={UserProfile} />
                    <Route path="/create-event" component={CreateEvent} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
