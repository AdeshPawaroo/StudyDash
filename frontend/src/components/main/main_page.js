import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';
// import TodosList from '../todo/TodoList';

class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
    }

    componentDidMount() {
        this.props.getAllTodo();
        this.props.fetchUserFlashcards(this.props.currentUser.id);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        // console.log(this.props)
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
                    <h2 className="welcomemsg">Good {msg}, {this.props.currentUser.handle}!<i className="far fa-hand-peace"></i></h2>
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
                        <div className="titleofbox">Pomodoro Clock<i className="far fa-clock" style={{ marginTop: '4%' }}></i></div>
                        <p className="maindesc">Start a timed study session</p>
                        <p className="clickbutton"><Link to={'/clock'} className="clocklink">Go</Link></p>
                </div>
                <div className="pomodorobox">
                        <div className="titleofbox">Manage Tasks<i className="fas fa-tasks" style={{ marginLeft: '0%', marginTop: '4%' }}></i></div>
                    <p className="maindesc">Keep track of your deadlines</p>
                        <p className="clickbutton"><Link to={'/list'} className="clocklink">Go</Link></p>
                </div>
                    <div className="pomodorobox">
                        <div className="titleofbox">Calender<i className="far fa-calendar" style={{ marginLeft: '3%' }}></i></div>
                        <p className="maindesc">Check the calender for your schedule</p>
                        <p className="clickbutton"><Link to={'/calender'} className="clocklink">Go</Link></p>
                    </div>
                </div>
                    <div className="rightcontainer">
                
                <div className="pomodorobox">
                        <div className="titleofbox">Flash Cards<i class="far fa-clipboard" style={{ marginLeft: '3%' }}></i></div>
                        <p className="maindesc">Test your studying habits</p>
                        <p className="clickbutton"><Link to={'/flashcards'} className="clocklink">Go</Link></p>
                </div>
                <div className="pomodorobox">
                        <div className="titleofbox">Profile Analytics<i className="far fa-chart-bar" style={{ marginTop: '4%' }}></i></div>
                        <p className="maindesc">Track your study habits</p>
                        <p className="clickbutton"><Link to='/profile' component={ProfileContainer} className="clocklink">Go</Link></p>
                </div>
                    <div className="pomodorobox">
                        <div className="titleofbox">About Us<i className="fas fa-address-card" style={{marginLeft: '3%'}}></i></div>
                        <p className="maindesc">Check out our team</p>
                        <p className="clickbutton"><Link to={'/team'} className="clocklink">Go</Link></p>
                    </div>
                </div>


            </div>
        );
    }
}

export default MainPage;



