import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

// import DateTimePicker from 'react-datetime-picker';
// import 'react-datetime-picker/dist/DateTimePicker.css';

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";


export default function CalenderContainer()  {

    const locales = {"en-US": require("date-fns/locale/en-US")};

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

    const events = [];

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent(){
            setAllEvents([...allEvents, newEvent])
    }

    
    return (
        <div className="calender-container">
            <h1 id='profile-title' className='calendar-link'><Link to='/' >Study Dash</Link></h1>
            <Calendar localizer={localizer} events={events} 
            startAccessor="start" endAccessor="end" 
            style={{height: 600, margin: "50px"}} />

            <div className="calender-form">

                <form className="calender-container-form">
                    <div>
                        <input type="text" placeholder="Add title" style={{marginRight: "10px"}} 
                        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
                    </div>
                    
                    <div className="date-picker">
                        <Datetime initialValue="Start date" style={{marginRight: "10px"}}
                        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
                    </div>

                    <div className="date-picker">
                        <Datetime initialValue="End date" selected={newEvent.end}
                        onChange={(end) => setNewEvent({...newEvent, end})} />
                    </div>

                    <div>
                        <button className="calendar-submit" onClick={handleAddEvent}>Add event</button>
                    </div>
                    
                </form>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
    
}

