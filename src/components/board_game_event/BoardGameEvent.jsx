import React, { useState, useEffect } from 'react';
import db from '../../firebase';


const BoardGameEvent = ({ game, date, spots, location, players, host, id, reload }) => {
    const avaibleSpots = (spots - 1 - players.length);
    const comps = Array(avaibleSpots).fill().map((_, ix) => {
        return <div>{ix}</div>
    });


   
    return (
        <>
        <div className="event__container">
            {game ? <img className="event__image" src={game.imageSource} /> : null}
            <div className="event__title">{((game || { title: '' }).title)}</div>
            <div className="event__date">{new Date(date).toDateString()} </div>
            <div className="event__location">{location}</div>
            <div className="event__host">{host}</div>
            <div className="event__players">{players}</div>
            <div className="event__spots">{spots}</div>
            {comps}
            <button
            className="event__btn"
                onClick={() =>
                    db.collection('board-game-events').doc(id).delete().then(reload)
                }
            >
                Delete Event
            </button>
        </div>
        </>
    );
};

export default BoardGameEvent;