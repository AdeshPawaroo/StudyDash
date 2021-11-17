import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';
import TodosList from '../todo/todos-list.component';

class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        console.log(this.props)
        let greeting = ''
        let msg = ''
        let hour = new Date().getHours();
        if (hour<12) {
            msg = 'Morning'
        }
        if (12<hour<18) {
            msg = 'Afternoon'
        }
        if (hour>18) {
            msg = 'Evening'
        }
        
        if(this.props.currentUser){
            greeting = (
                <div className='greeting'>
                    <h2 className="welcomemsg">Good {msg}, {this.props.currentUser.handle}!<i class="far fa-hand-peace"></i></h2>
                    <button id='logout-button' onClick={this.logoutUser}>Logout</button>
                    
                </div>
            )

        }
        return (
            <div className='main-page-div'>
                <h1 className='app-name'>Study Dash</h1>
                {greeting}
                <p className="bottommsg">What would you like to do?</p>
                <br />
                <div className="leftcontainer">
                <div className="pomodorobox">
                        <div className="titleofbox">Pomodoro Clock<i class="far fa-clock"></i></div>
                        <p className="maindesc">Start a timed study session</p>
                        <p className="clickbutton"><Link to={'/clock'} className="clocklink">Go</Link></p>
                </div>
                <div className="pomodorobox">
                        <div className="titleofbox">Manage Tasks<i class="fas fa-tasks"></i></div>
                    <p className="maindesc">Keep track of your deadlines</p>
                        <p className="clickbutton"><Link to={'/list'} className="clocklink">Go</Link></p>
                </div>
                <div className="pomodorobox">
                        <div className="titleofbox">Study Playlist<i class="fas fa-headphones-alt"></i></div>
                        <p className="maindesc">Play some study music</p>
                        <p className="clickbutton"><Link to={'/playlist'} className="clocklink">Go</Link></p>
                </div>
                </div>
                    <div className="rightcontainer">
                <div className="pomodorobox">
                        <div className="titleofbox">Calender<i class="far fa-calendar"></i></div>
                        <p className="maindesc">Check calender for your schedule</p>
                        <p className="clickbutton"><Link to={'/calender'} className="clocklink">Go</Link></p>
                </div>
                <div className="pomodorobox">
                    <div className="titleofbox">Flash Cards</div>
                        <p className="maindesc">Test your studying habits</p>
                        <p className="clickbutton"><Link to={'/flashcards/user'} className="clocklink">Go</Link></p>
                </div>
                <div className="pomodorobox">
                        <div className="titleofbox">Profile Analytics<i class="far fa-chart-bar"></i></div>
                        <p className="maindesc">Track your study habits</p>
                        <p className="clickbutton"><Link to={'/profile'} className="clocklink">Go</Link></p>
                </div>
                </div>


            </div>
        );
    }
}

export default MainPage;