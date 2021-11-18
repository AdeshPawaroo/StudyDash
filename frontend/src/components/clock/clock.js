import React, { useEffect, useState } from "react";
// import Sound from 'react-sound';
// import click_sound from '../../../public/click.mp3';
// var click_sound = new Audio("./../../../public/click.mp3");
import useSound from 'use-sound';
import boopSfx from '../../sounds/boop.mp3';


export default function App() {
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timer, setTimer] = useState();
    const [play] = useSound(boopSfx);

    const start = () => {
        const timer = setInterval(() => {
            setSecondsLeft((secondsLeft) => secondsLeft - 1);
            if (secondsLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
        setTimer(timer);
        // {play};
        
    };

    useEffect(() => {
        if (secondsLeft === 0) {
            clearInterval(timer);
        }
    }, [secondsLeft, timer]);

    useEffect(() => {
        return () => clearInterval(timer);
    }, [timer]);

    return (
        <div className="App">
            <h1>Pomodoro Timer</h1>
            <button onClick={start}>start</button>
            <div>{secondsLeft} seconds left</div>
        </div>
    );
}