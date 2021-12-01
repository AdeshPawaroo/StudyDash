import './App.css';
import React from 'react'

import Timer from "./timer";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Settings from './Settings';
import SettingsContext from "./SettingsContext";
import MusicPage from '../music/music_page';
// import Modal from '../modal/modal';

function App(props) {

    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
    console.log('hi')
    // debugger;

    return (
        <main>
            <h1 id='profile-title' className="clock-main-link"><Link to='/'>Study Dash</Link></h1>
            <h1 className="clocktitle" >Pomodoro Clock</h1>
            <SettingsContext.Provider value={{
                showSettings,
                setShowSettings,
                workMinutes,
                breakMinutes,
                setWorkMinutes,
                setBreakMinutes
            }}>

            {showSettings ? <Settings /> : <Timer receiveTimeStudied={props.receiveTimeStudied} currentUser={props.currentUser}/>}
            </SettingsContext.Provider>
            
        </main>
    );
}

export default App;
