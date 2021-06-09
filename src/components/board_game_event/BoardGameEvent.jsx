import React, { useState, useEffect } from 'react';
import db, {auth, firestore} from '../../firebase';


const BoardGameEvent = ({ game, date, spots, location, players, host, id, reload }) => {
    const avaibleSpots = (spots - 1 - players.length);
    const ToggleParticipationButton = () => {
        const loggedInUserDisplayName = auth().currentUser.displayName;
        // const playerParticitpates = loggedInUserDisplayName;
        const spotsLeft = (players.length +1 ) < spots;
        const addPlayer =()=>{
            db.collection("board-game-events").doc(id).update({
                players: firestore.FieldValue.arrayUnion(loggedInUserDisplayName)
            })
        }

        if (loggedInUserDisplayName === host) {
            return null;
        // } else if (playerParticitpates) {
        //     return <button></button>
        } else if (spotsLeft ) {
            return <button onClick={addPlayer}>Join</button>
        } else {
            return <div>no spots left</div>
        }
    }

    return (
        <>
        <div className="event__container">
            {game ? <img className="event__image" src={game.imageSource} /> : null}
            <div className="event__title">{((game || { title: '' }).title)}</div>
            <div className="event__date">{new Date(date).toDateString()} </div>
            <div className="event__location">{location}</div>
            <div className="event__host">{host}</div>
            <div className="event__players">{players}</div>
            <div className="event__spots">{players.length + 1} / {spots}</div>
            <ToggleParticipationButton/>
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