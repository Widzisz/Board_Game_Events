import React from 'react';
import { useState } from 'react/cjs/react.development';
import './search_for_event.scss';
import BoardGameEvent from '../board_game_event/BoardGameEvent';

const SearchForEvent = ({ setTitle }) => {
    return (
        <div className="searche__container">
            <input
                type="text"
                placeholder="Search for Event"
                className="search__input"
                onChange={e => setTitle(e.target.value.toLowerCase())}
            ></input>
        </div>
    );
};

export default SearchForEvent;
