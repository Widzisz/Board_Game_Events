import React from 'react';
import './main_page.scss';
import NavBar from '../nav_bar/NavBar';

const renderPlayers = players => {
    return players.map(player =>
        player ? <div>{player.name}</div> : <div>Join!!!</div>,
    );
};

const MainPage = () => {
    const events = JSON.parse(localStorage.getItem('events') || '[]') || [];

    return (
        <div>
            <NavBar />
            <h2 className="main-page">Main Page</h2>
            {events.map((ev, ix) => (
                <>
                    <div id={ix}>{renderPlayers(ev.players)}</div>
                    <div>{ev.date} </div>
                </>
            ))}
        </div>
    );
};

export default MainPage;
