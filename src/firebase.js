import firebase from 'firebase/app';
import 'firebase/analytics';
// import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: 'AIzaSyAcSETWc_xxqSkGHzr01QQowSHN4lfrk8g',
    authDomain: 'board-game-events.firebaseapp.com',
    projectId: 'board-game-events',
    storageBucket: 'board-game-events.appspot.com',
    messagingSenderId: '668973592176',
    appId: '1:668973592176:web:63e725cb21b954c9218eb5',
    measurementId: 'G-71YV8K6WDZ',
});

export default firebase.firestore();
