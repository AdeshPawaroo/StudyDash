import React from 'react';
import { Link } from 'react-router-dom';
import FlashcardProfileContainer from '../flashcards/flashcards_user_container'
import TodosList from '../todo/List';


class Profile extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount = async () => {
        try {
            await this.props.getAllTodo();
            await this.props.fetchUserFlashcards(this.props.currentUser.id);
        } catch (err) {
            console.log('[ERROR]');
            console.log(err.message);
        }
        // this.props.getAllTodo();
        // this.props.fetchUserFlashcards(this.props.currentUser.id);
    }

    render(){
        const lastLogin = new Date(this.props.currentUser.lastLogin);
        const date = new Date(this.props.currentUser.date);
        let totalTime = this.props.currentUser.timeStudied;
        const hours = Math.floor((totalTime / 60) / 60);
        if (hours > 0){
            totalTime -= ((hours * 60) * 60);
        }
        const minutes = Math.floor(totalTime / 60);
        if (minutes > 0) {
            totalTime -= (minutes * 60);
        }
        const seconds = totalTime;
        let tasksDone = []
        let activeTasks = []
        this.props.todos.forEach(todo => {
            if(todo.done){
                tasksDone.push(todo)
            } else {
                activeTasks.push(todo)
            }
        })

        return(
            <div className='profile-div'>
                
                <h1 id='profile-title'><Link to='/'>Study Dash</Link></h1>
                <div className='profile-content'>
                    <div id='profile-handle'>
                        <i className="fas fa-user" /> 
                        <h2 id='p-handle'>
                            {this.props.currentUser.handle}
                        </h2>
                    </div>

                    <h2>Analytics:</h2>
                    <div className='profile-info-div analytics'>
                        <div className='profile-info'>
                            Active Tasks: {activeTasks.length}
                        </div>
                        <div className='profile-info'>
                            Tasks Completed: {tasksDone.length}
                        </div>
                        <div className='profile-info'>
                            Total Tasks: {this.props.todos.length}
                        </div>
                        <div className='profile-info'>
                            Total Flashcards: {this.props.flashcards.length}
                        </div>
                        <div className='profile-info'>
                            Days Logged In: {this.props.currentUser.daysLoggedIn}
                        </div>
                        <div className='profile-info'>
                            Time Spent Studying: {hours} hr(s) {minutes} min(s) {seconds} sec(s)
                        </div>
                    </div>
                    <div className='account-info'>
                        <i className="fas fa-bars"></i>
                        <h3 id='profile-account-info'>Account Information:</h3>
                    </div>
                    <div className='profile-info-div'>
                        <div className='profile-info'>
                            Handle: {this.props.currentUser.handle}
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
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;