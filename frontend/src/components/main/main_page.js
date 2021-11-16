import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContainer from '../profile/profile_container';

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
                
                <footer>
                    Copyright &copy; 2021 StudyDash
                </footer>
            </div>
        );
    }
}

export default MainPage;