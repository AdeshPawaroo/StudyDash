import React, {useState} from 'react'
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


export default function CalenderContainer() {
  
    const locales = {
        "en-US": require("date-fns/locale/en-US")
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

    const events = [ 
        {
            title: "Graduation Day!!! 🎓",
            start: new Date(2021,11,-6),
            end: new Date(2021,11,-6)
        },
        {
            title: "MERN Project",
            start: new Date(2021,11,-15),
            end: new Date(2021,11,-11)
        },
        {
            title: "MERN Project Due",
            start: new Date(2021,11,-12),
            end: new Date(2021,11,-12)
        },
        {
            title: "Personal Pitch",
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Resume Lecture",
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Behavioral Interviewing",
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Technical Interviewing",
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Online Presence Lecture",
            start: new Date(2021,11,-8),
            end: new Date(2021,11,-8)
        },
        {
            title: "Applying Approaches Lecture",
            start: new Date(2021,11,-8),
            end: new Date(2021,11,-8)
        },
        {
            title: "Memoization/Recursion",
            start: new Date(2021,11,-8),
            end: new Date(2021,11,-8)
        },
        {
            title: "Cover Letter",
            start: new Date(2021,11,-7),
            end: new Date(2021,11,-7)
        },
        {
            title: "Tabulation, Naive Sorts",
            start: new Date(2021,11,-7),
            end: new Date(2021,11,-7)
        },
        {
            title: "Open Material Completion",
            start: new Date(2021,11,-7),
            end: new Date(2021,11,-7)
        },
        {
            title: "Portfolio Site",
            start: new Date(2021,11,-6),
            end: new Date(2021,11,-6)
        },
        {
            title: "Negotiation Lecture",
            start: new Date(2021,11,-6),
            end: new Date(2021,11,-6)
        },
        {
            title: "Thanksgiving 🦃",
            start: new Date(2021,11,-5),
            end: new Date(2021,11,-5)
        },
        {
            title: "Sorts, Search, Linked List & Queues",
            start: new Date(2021,11,0),
            end: new Date(2021,11,0)
        },
        {
            title: "Stacks, Queues, BSTs, Trees",
            start: new Date(2021,12,-30),
            end: new Date(2021,12,-30)
        },
        {
            title: "Graphs, Heaps, Tries",
            start: new Date(2021,12,-29),
            end: new Date(2021,12,-29)
        }
    ]

    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent(){
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div className="calender-container">

            <Calendar localizer={localizer} events={allEvents} 
            startAccessor="start" endAccessor="end" 
            style={{height: 600, margin: "50px"}} />

            <div className="calender-form">

                <form className="calender-container-form">
                    <div>
                        <input type="text" placeholder="Add title" style={{marginRight: "10px"}} 
                        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} />
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
            <br/>
            <br/>
            <br/>
        </div>
    )
}