import React from 'react';
import './creat_event.scss';

const CreatEvent = () => {
    return (
        <div className="createvent__container">
            <label className="form-label">Number of Players</label>
            <input className="form-input" type="number" name="players" placeholder="" />
        </div>
    );
};

export default CreatEvent;
