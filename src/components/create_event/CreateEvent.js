import React, { useState, useEffect } from 'react';
import './create_event.scss';
import NavBar from '../nav_bar/NavBar';
import getBoardGames from './GetBoardGames';
import { Link } from 'react-router-dom';
import db, { auth } from '../../firebase';
import noImage from '../../Images/noImage.png';
import userEvent from '@testing-library/user-event';

const CreateEvent = () => {
    const [players, setPlayers] = useState(2);
    const [date, setDate] = useState();
    const [games, setGames] = useState([]);
    const [game, setGame] = useState();
    const [location, setLocation] = useState('');

    const handleIncrement = () => {
        setPlayers(players + 1);
        if (players === 8) {
            setPlayers(8);
        }
    };
    const handleDecrement = () => {
        if (players > 2) {
            setPlayers(players - 1);
        } else {
            setPlayers(2);
        }
    };

    const handleDateChange = event => {
        return setDate(event.target.value);
    };

    const handleGameChange = event => {
        return setGame(games.find(g => g.title === event.target.value));
    };

    const handleLocationChange = event => {
        return setLocation(event.target.value);
    };

    const handleCreate = event => {
        const id = Math.round(Math.random() * 10000000).toString();

        const eventData = {
            id,
            date: date,
            game: db.doc('board-games/' + game.title),
            location: location,
            players: [],
            host: auth().currentUser.displayName,
            spots: players,
        };

        db.collection('board-game-events').doc(id).set(eventData);
    };

    useEffect(() => {
        getBoardGames().then(setGames);
    }, []);

    const imageSource = game ? game.imageSource : noImage;
    const noGameChoosen = !game;
    return (
        <>
            <NavBar />
            <section className="creatEvent__container">
                <img className="creatEvent__img" src={imageSource}></img>
                <label className="label" for="game">
                    Choose a Game:{' '}
                </label>
                <select
                    onChange={handleGameChange}
                    className="creatEvent__input"
                    name="game"
                >
                    <option value="none">Choose</option>
                    {games.map(({ title }) => (
                        <option value={title}>{title}</option>
                    ))}
                </select>
                <p className="creatEvent__players">Number of Players: {players}</p>
                <div className="creatEvent__players-container">
                    <button className="creatEvent__players-btn" onClick={handleDecrement}>
                        -
                    </button>
                    <button className="creatEvent__players-btn" onClick={handleIncrement}>
                        +
                    </button>
                </div>
                <label className="label" for="date">
                    Start Date:{' '}
                </label>
                <input
                    onChange={handleDateChange}
                    className="creatEvent__input"
                    type="date"
                    name="date"
                />

                <label className="label" for="location">
                    Your Location:{' '}
                </label>
                <input
                    onChange={handleLocationChange}
                    className="creatEvent__input"
                    type="text"
                    name="location"
                    placeholder="Your Location"
                />

                <button
                    onClick={handleCreate}
                    disabled={noGameChoosen}
                    className="creatEvent__btn"
                >
                    <Link disabled={true} className="link" to="./">
                        Create
                    </Link>
                </button>
            </section>
        </>
    );
};

export default CreateEvent;
