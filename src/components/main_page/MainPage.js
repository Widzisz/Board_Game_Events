import React, { useState, useEffect } from 'react';
import './main_page.scss';
import NavBar from '../nav_bar/NavBar';
import db from '../../firebase';
import BoardGameEvent from '../board_game_event/BoardGameEvent';
import SearchForEvent from '../search_for_event/SearchForEvent';

const MainPage = () => {
    const [events, setEvents] = useState([]);
    const [reload, setReload] = useState();

    useEffect(() => {
        db.collection('board-game-events')
            .get()
            .then(snap => setEvents(snap.docs.map(docs => docs.data())));
    }, [reload]);

    return (
        <div>
            <NavBar />
            <SearchForEvent />
            <section className="mainPage__container">
                <h2 className="mainPage__title">Join Event</h2>
                {events.map(ev => (
                    <BoardGameEvent {...ev} reload={() => setReload(!reload)} />
                ))}
            </section>
        </div>
    );
};

export default MainPage;
