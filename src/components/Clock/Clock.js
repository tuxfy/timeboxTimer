import React from 'react';
import './Clock.scss';

const Clock = ({ min, sec }) => {
    return (
        <div id="clock">
            <div id="min">{("0" + (min)).slice(-2)}</div>
            <div id="sec">{("0" + (sec)).slice(-2)}</div>
        </div>
    );
};

export default Clock;
