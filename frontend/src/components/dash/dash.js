import React from 'react';
import { Link } from 'react-router-dom'

class Dash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }

    componentWillMount() {
        // console.log(this.props.currentUser.id)
    }

    render() {
            return (
                <div>
                    <Link to={'/clock'}>Pomodoro Clock</Link>
                    <Link to={'/list'}>Tasks</Link>
                    <Link to={'/calender'}>Calendar</Link>
                    <Link to={'/profile'}>Profile</Link>
                </div>
            );
        }
    }


export default Dash;
