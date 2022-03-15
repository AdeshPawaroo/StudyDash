import './App.css';
import React from 'react'

import Timer from "./timer";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Settings from './Settings';
import SettingsContext from "./SettingsContext";
// import MusicPage from '../music/music_page';
// import Modal from '../modal/modal';
// import Footer from './../footer/footer'
import { Prompt } from 'react-router-dom';

function App(props) {

    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(45);
    const [breakMinutes, setBreakMinutes] = useState(15);
    // console.log('hi')
    // debugger;

    // let leaveClock = (window.confirm('Are you sure you wish to delete this item?'))


    return (
        <main>
            <Prompt 
                message="Are you sure you want to leave? Pomodoro progress may be lost."
            />
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

            {showSettings ? <Settings /> : <Timer editUser={props.editUser} currentUser={props.currentUser}/>}
            </SettingsContext.Provider>
            {/* <Footer /> */}
            
        </main>
    );
}

export default App;
