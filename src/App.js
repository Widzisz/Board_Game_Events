import React from 'react';
import './App.scss';
import WelcomePage from './components/welcome_page/WelcomePage';
import CreatUser from './components/creat_user/CreatUser';
import MainPage from './components/main_page/MainPage';
// import CreatEvent from './components/creat_event/CreatEvent';
// import { user_profile } from './components/user_profile/UserProfile';

const App = () => {
    return (
        <div className="App">
            {/* <WelcomePage /> */}
            {/* <CreatUser /> */}
            {<MainPage />}
        </div>
    );
};

export default App;
