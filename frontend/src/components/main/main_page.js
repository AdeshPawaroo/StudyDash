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
        if(this.props.currentUser){
            greeting = (
                <div className='greeting'>
                    <h2>Hello, {this.props.currentUser.handle}</h2>
                    <button id='logout-button' onClick={this.logoutUser}>Logout</button>
                    
                </div>
            )

        }
        return (
            <div className='main-page-div'>
                <h1 className='app-name'>Study Dash</h1>
                {greeting}
                <p>What would you like to do?</p>
                <br />
                <div className='links'>
                    <a href='#'>
                        <h3>
                            Pomodoro Clock
                        </h3>
                        <br />
                        A timer that uses the Pomodoro Method to effectively Study
                    </a>
                    <Link to='/list' component={TodosList}>
                        <h3>
                            Deadlines
                        </h3>
                        <br />
                        Set deadlines for projects or tests
                    </Link>
                    <a href='#'>
                        <h3>
                            Music
                        </h3>
                        <br />
                        Play music to help you study
                    </a>
                    <Link to='/profile' component={ProfileContainer}>
                        <h3>
                            Profile
                        </h3>
                        <br />
                        View profile information and analytics based on your study habits.
                    </Link>
                </div>
                <footer>
                    Copyright &copy; 2021 StudyDash
                </footer>
            </div>
        );
    }
}

export default MainPage;