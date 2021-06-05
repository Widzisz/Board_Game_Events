import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import db, { auth } from './firebase';

var provider = new auth.GoogleAuthProvider();

const userP = new Promise((rez, rej) => {
    auth().onAuthStateChanged(user => user && rez(user));
    setTimeout(rej, 3000);
});

userP
    .then(user => {
        console.log(user);
        db.collection('new-user').doc(user.uid).set({
            userName: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            fotoUrl: user.photoURL,
        });
    })

    .catch(() => {
        auth().signInWithRedirect(provider);
    });

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
