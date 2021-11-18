import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        const lastLogin = new Date(this.props.currentUser.lastLogin)
        const date = new Date(this.props.currentUser.date)
        // console.log(lastLogin)
        return(
            <div className='profile-content'>
                <div className='profile-info' id='profile-handle'>
                    {this.props.currentUser.handle}
                </div>
                <div className='profile-info'>
                    Email: {this.props.currentUser.email}
                </div>
                <div className='profile-info'>
                    Account Created: {date.toDateString()}
                </div>
                <div className='profile-info'>
                    Last Login: {lastLogin.toDateString()}
                </div>
                <div className='profile-info'>
                    Days Logged In: {this.props.currentUser.daysLoggedIn}
                </div>
                <div className='profile-info'>
                    Total Time Spent Studying: __ hr(s) __ min(s)
                </div>
            </div>
        )
    }

}

export default Profile;