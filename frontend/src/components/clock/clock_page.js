import React from 'react';
import { Link } from 'react-router-dom';

class ClockPage extends React.Component {
    constructor(props) {
        super(props)
        this.start_timer = this.start_timer.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.start_timer();
    }
    start_timer() {
        let session_seconds = "00";
        let session_minutes = 25;
        // click_sound.play();

        // Change the minutes and seconds to starting time
        session_minutes = 24;
        session_seconds = 59;
        let that = this;

        // Start the countdown
        var minutes_interval = setInterval(minutesTimer, 60000);
        var seconds_interval = setInterval(secondsTimer, 1000);

        // Functions
        // Function for minute counter
        function minutesTimer() {
            session_minutes = session_minutes - 1;
            document.getElementById("minutes").innerHTML = session_minutes;
        }

        // Function for second counter
        function secondsTimer() {
            session_seconds = session_seconds - 1;
            document.getElementById("seconds").innerHTML = session_seconds;
            that.props.currentUser.timeStudied += 1;
            // Check if the seconds and minutes counter has reached 0
            // If reached 0 then end the session
            if (session_seconds <= 0) {
                if (session_minutes <= 0) {
                    // Clears the interval i.e. stops the counter
                    clearInterval(minutes_interval);
                    clearInterval(seconds_interval);

                    // Add the message to the html
                    document.getElementById("done").innerHTML =
                        "Session Completed!! Take a Break";

                    // Make the html message div visible
                    document.getElementById("done").classList.add("show_message");

                    // PLay the bell sound to tell the end of session
                    // bell.play();
                }

                // Reset the session seconds to 60
                session_seconds = 60;
            }
        }
    }
    render() {
        let session_seconds = "00";
        let session_minutes = 25;
        return (
            <div class="container1">

                <h1 id='profile-title' class="clock-main-link"><Link to='/'>Study Dash</Link></h1>
                <h1 class="clocktitle" >Pomodoro Clock</h1>


                <div class="containertimer">
                    <div class="row">
                        <div class="timer">
                            <h4 id="minutes">{session_minutes}</h4>
                        </div>
                        <div class="col2">
                            <h4>:</h4>
                        </div>
                        <div class="col5">
                            <h4 id="seconds">{session_seconds}</h4>
                        </div>
                    </div>
                </div>


                <div class="col6">
                    <h3 id="done" class="text-center"></h3>
                </div>


                <div class="buttonscontainer">
                    <button class="btn" onClick={this.handleClick}>
                        <i class="fas fa-play fa-2x"></i>
                    </button>
                    {/* <a href="/"><i class="fas fa-redo-alt fa-2x redofontawes"></i></a> */}
                </div>
            </div>
        )
    }
}

export default ClockPage;

