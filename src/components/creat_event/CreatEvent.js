import React, { useState } from 'react';
import './creat_event.scss';
import NavBar from '../nav_bar/NavBar';
import StarWars from '../../Images/StarWars.jpg';

const createEmptyEvent = (numberOfPlayers, date) => {
    const players = Array(numberOfPlayers).fill();
    players[0] = { name: 'Host' };

    return { players, date };
};

const CreatEvent = () => {
    const [players, setPlayers] = useState(2);
    const [date, setDate] = useState();

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
        setDate(event.target.value);
    };

    const handleCreat = () => {
        const eventObj = createEmptyEvent(players, date);
        const currentEvents = JSON.parse(localStorage.getItem('events') || '[]') || [];
        const updatedEvents = [...currentEvents, eventObj];
        localStorage.setItem('events', JSON.stringify(updatedEvents));

        window.location.href = '/';
    };

    return (
        <>
            <NavBar />
            <section className="creatEvent__container">
                <img className="creatEvent__img" src={StarWars}></img>
                <label for="game">Choose a Game: </label>
                <select className="creatEvent__input" name="game">
                    <option value="none">Choose a Game</option>
                    <option value="nemesis">Nemesis</option>
                    <option value="starwars">Game of Thrones 2ed.</option>
                    <option value="gameofthrones">Star Wars Rebellion</option>
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

                <label for="date">Start Date: </label>
                <input
                    onChange={handleDateChange}
                    className="creatEvent__input"
                    type="date"
                    name="date"
                />

                <label for="location">Your Location: </label>
                <input
                    className="creatEvent__input"
                    type="text"
                    name="location"
                    placeholder="Your Location"
                />
                {/* <div>{creatSpot}</div> */}
                <button onClick={handleCreat} className="creatEvent__btn">
                    Creat
                </button>
            </section>
        </>
    );
};

export default CreatEvent;
