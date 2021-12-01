import React from "react";
import { withRouter } from 'react-router-dom';

class Eventform extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }
    }
    
    componentDidMount() {
        this.props.fetchEvents();
    }

    componentWillReceiveProps(newState) {
        this.setState({ events: newState.events });
    }

    render(){
        const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
        const [allEvents, setAllEvents] = useState(events);

        function handleAddEvent(){
            setAllEvents([...allEvents, newEvent])
        }

        return(
            <div className="calender-form">

                <form className="calender-container-form">
                    <div>
                        <input type="text" placeholder="Add title" style={{marginRight: "10px"}} value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
                    </div>
                    
                    <div className="date-picker">
                        <DatePicker placeholderText="Start date" style={{marginRight: "10px"}} 
                        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
                    </div>

                    <div className="date-picker">
                        <DatePicker placeholderText="End date" selected={newEvent.end} 
                        onChange={(end) => setNewEvent({...newEvent, end})} />
                    </div>

                    <div>
                        <button className="calendar-submit" onClick={handleAddEvent}>Add event</button>
                    </div>
                    
                </form>
            </div>
        )
    }
};

export default withRouter(Event);