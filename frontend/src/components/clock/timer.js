import React from 'react'
// import ReactDOM from 'react-dom'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from './SettingsContext';
import HelpButton from './HelpButton';
import Popup from './Popup';
// import MusicButton from './MusicButton';
// import MusicPopup from './MusicPopup';
// import Footer from './../footer/footer'

const red = '#f54e4e'
const green = '#4aec8c'

function Timer(props) {
    const [buttonPopup, setButtonPopup] = useState(false);
    // const [musicPopup, setMusicPopup] = useState(false);
    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work'); // work/break/null
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);


    function tick() {
        props.currentUser.timeStudied += 1;
        let timeStudied = props.currentUser.timeStudied;
        props.receiveTimeStudied(timeStudied);
        secondsLeftRef.current--; //current - 1 
        setSecondsLeft(secondsLeftRef.current);

    }

    // function initTimer() {
    //     setSecondsLeft(settingsInfo.workMinutes * 60)
    // }
    // function switchMode() {
    //     const nextMode = modeRef.current === 'work' ? 'break' : 'work'
    //     const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;
    //     setMode(nextMode)
    //     modeRef.current = nextMode;

    //     setSecondsLeft(nextSeconds)
    //     secondsLeftRef.current = nextSeconds
    // }
    // useEffect(() => {
    //     initTimer();
    //     const interval = setInterval(() => {
    //         if (isPausedRef.current) {
    //             return;
    //         }
    //         if (secondsLeftRef.current === 0 ) {
    //             switchMode
    //         }

    //         tick();

    //     }, 1000);
    //     return () => clearInterval(interval) //when unmounted it will clear interval 
    // },[settingsInfo]);



    // const totalSeconds = mode === 'work'
    //     ? settingsInfo.workMinutes * 60
    //     : settingsInfo.breakMinutes * 60;
    // const percentage = Math.round(secondsLeft / totalSeconds * 100);

    // const minutes = Math.floor(secondsLeft / 60);
    // let seconds = secondsLeft % 60;
    // if (seconds < 10) seconds = '0' + seconds;
    useEffect(() => {

        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;

            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
        }

        secondsLeftRef.current = settingsInfo.workMinutes * 60;
        setSecondsLeft(secondsLeftRef.current);

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);

        return () => clearInterval(interval);
    }, [settingsInfo]);

    const totalSeconds = mode === 'work'
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <div> 
            <CircularProgressbar
                value={percentage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: red,
                    pathColor: mode === 'work' ? red : green,
                    tailColor: 'rgba(255,255,255,.2)',
                })} />
            <div>
                {/* {isPaused ? <PlayButton /> : <PauseButton />} */}
                {isPaused
                    ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
                    : <PauseButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={() => { settingsInfo.setShowSettings(true)}}/>
                <HelpButton onClick={() => setButtonPopup(true)}/>
                {/* <MusicButton onClick={() => setMusicPopup(true)}/> */}
            </div>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className="help-title">About This</h3>
                <p className="help-info">The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, separated by short breaks.</p>
                </Popup>
               
        </div>
    )
}

export default Timer; 


/* <MusicPopup trigger2={musicPopup} setTrigger2={setMusicPopup}>
                    <h3 className="help-title">Music</h3>
                    <p className="help-info">
                    
                        {/* <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */
/* <iframe src="https://open.spotify.com/embed/playlist/2pCWQFnu7EBlLNJInbytUw?utm_source=generator&theme=0" width="100%" height="600px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */ 

/* </p> */ 
/* /*</MusicPopup> */ 