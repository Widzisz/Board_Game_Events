import React from 'react';
import { useState } from 'react/cjs/react.development';
import './search_for_event.scss';
import BoardGameEvent from '../board_game_event/BoardGameEvent';

const SearchForEvent = () => {
    const [searchEvent, setSearchEvent] = useState('');

    const searchTitle = title => {
        return title.filter(ele => ele.title.toLowerCase().indexOf(searchEvent));
    };

    return (
        <div className="search__container">
            <input
                type="text"
                placeholder="Search for Event"
                className="search__input"
                value={searchEvent}
                onChange={e => setSearchEvent(e.target.value)}
            ></input>
        </div>
    );
};

export default SearchForEvent;
