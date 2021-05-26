import React, { useState, useEffect } from 'react';
import db from '../../firebase';

const BoardGameEvent = ({ game, date, spots, location, players, host, id, reload }) => {
    const [gameData, setGame] = useState();
    // const avaibleSpots = (spots - 1 - players.length);
    // const comps = Array(avaibleSpots).fill().map((_, ix) => {
    //     return <div>{ix}</div>
    // });

    

    useEffect(() => {
        game.get().then(snap => {
            setGame(snap.data());
        });
    }, []);
    return (
        <>
            {gameData ? <img src={gameData.imageSource} /> : null}
            <div>{(gameData || { title: '' }).title}</div>
            <div>{new Date(date.seconds * 1000).toDateString()} </div>
            <div>{location}</div>
            <div>{host}</div>
            <div>{players}</div>
            <div>{spots}</div>
            {/* {comps} */}
            <button
                onClick={() =>
                    db.collection('board-game-events').doc(id).delete().then(reload)
                }
            >
                XXX
            </button>
        </>
    );
};

export default BoardGameEvent;