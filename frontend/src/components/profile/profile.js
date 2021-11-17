import React from 'react';
import { Link } from 'react-router-dom';
import FlashcardProfileContainer from '../flashcards/flashcards_user_container'

class Profile extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        const lastLogin = new Date(this.props.currentUser.lastLogin)
        const date = new Date(this.props.currentUser.date)
        console.log(lastLogin)
        return(
            <div className='profile-div'>
                
                <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
                <div className='profile-content'>
                    <div id='profile-handle'>
                        {this.props.currentUser.handle}
                    </div>
                    <h2>Flashcards:</h2>
                    <div className="flashcard-div profile-info-div">
                        <FlashcardProfileContainer/>
                    </div>

                    <h2>Analytics:</h2>
                    <div className='profile-info-div'>
                        <div className='profile-info'>
                            Days Logged In: {this.props.currentUser.daysLoggedIn}
                        </div>
                        <div className='profile-info'>
                            Total Time Spent Studying: __ hr(s) __ min(s)
                        </div>
                    </div>

                    <h2 id='profile-account-info' >Account Information:</h2>
                    <div className='profile-info-div'>
                        <div className='profile-info'>
                            Email: {this.props.currentUser.email}
                        </div>
                        <div className='profile-info'>
                            Account Created: {date.toDateString()}
                        </div>
                        <div className='profile-info'>
                            Last Login: {lastLogin.toDateString()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;