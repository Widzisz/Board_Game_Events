import React from 'react';
import './App.scss';
import NavBar from './components/nav_bar/NavBar';
// import WelcomePage from './components/welcome_page/WelcomePage';
import CreatUser from './components/creat_user/CreatUser';
import MainPage from './components/main_page/MainPage';
import CreatEvent from './components/creat_event/CreatEvent';
import UserProfile from './components/user_profile/UserProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <CreatUser />
                {/* <NavBar />
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/createvent" component={CreatEvent} />
                </Switch> */}
            </div>
        </Router>
    );
};

export default App;
