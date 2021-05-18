import React from 'react';
import './App.scss';
import WelcomePage from './components/welcome_page/WelcomePage';
import CreatEvent from './components/creat_event/CreatEvent';
import { creat_user } from './components/creat_user/CreatUser';
import { main_page } from './components/main_page/MainPage';
import { user_profile } from './components/user_profile/UserProfile';

const App = () => {
    return (
        <div className="App">
            <WelcomePage />
        </div>
    );
};

export default App;
