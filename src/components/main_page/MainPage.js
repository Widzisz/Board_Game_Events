import React, { useState, useEffect } from 'react';
import './main_page.scss';
import NavBar from '../nav_bar/NavBar';
import db from '../../firebase';
import BoardGameEvent from '../board_game_event/BoardGameEvent';
import SearchForEvent from '../search_for_event/SearchForEvent';

const MainPage = () => {
    const [events, setEvents] = useState([]);
    const [reload, setReload] = useState();
    const [title, setTitle] = useState('');

    useEffect(() => {
        db.collection('board-game-events')
            .get()
            .then(snap => {
                const shallowEvents = snap.docs.map(docs => docs.data());
                const gamesPromises = shallowEvents.map(ev => {
                    return ev.game.get();
                });

                Promise.all(gamesPromises).then(games => {
                    const resolvedGames = games.map(g => g.data());
                    const deepEvents = shallowEvents.map((obj, ix) => ({
                        ...obj,
                        game: resolvedGames[ix],
                    }));

                    setEvents(deepEvents);
                });
            });
    }, [reload]);

    return (
        <div>
            <NavBar />
            <SearchForEvent setTitle={setTitle} />
            <section className="mainPage__container">
                <h2 className="mainPage__title">Join Event</h2>
                {events
                    .filter(ele => {
                        if (title === '') {
                            return true;
                        } else if (ele.game.title.toLowerCase().indexOf(title) !== -1) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    .map(ev => (
                        <BoardGameEvent {...ev} reload={() => setReload(!reload)} />
                    ))}
            </section>
        </div>
    );
};

export default MainPage;
