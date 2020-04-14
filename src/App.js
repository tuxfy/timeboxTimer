import React from 'react';
import './App.scss';
import Button from './components/Button/Button';
import { newUUID } from './utils/UUID';

const App = () => {

    const addTime = (minutes) => {
        console.log("minutes",minutes);
    };
    const timerAction = (minutes) => {
        console.log("minutes",minutes);
    };


    return (
        <>
            <header>
                {[1, 5, 10].map((value) => {
                    return (
                        <Button
                            key={newUUID()}
                            title={'➕' + value + 'min'}
                            value={value}
                            size="big"
                            clickEvent={addTime}
                        ></Button>
                    );
                })}
                {['▶️', '⏹️', '🗑️'].map((value) => {
                    return (
                        <Button
                            key={newUUID()}
                            title={value}
                            value={value}
                            size="big"
                            clickEvent={timerAction}
                        ></Button>
                    );
                })}
            </header>
            <main>sdskjdhsjhdsjkhd</main>
            <footer>
                <p>Copyright 2009 Your name</p>
            </footer>
        </>
    );
};

export default App;
