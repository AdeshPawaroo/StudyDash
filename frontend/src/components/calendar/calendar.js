import React, {useState} from 'react'
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from "react-datepicker";
import moment from 'moment';

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
            allDay: true,
            start: new Date(2021,11,-6),
            end: new Date(2021,11,-6)
        },
        {
            title: "MERN Project",
            allDay: true,
            start: new Date(2021,11,-15),
            end: new Date(2021,11,-11)
        },
        {
            title: "MERN Project Due",
            allDay: true,
            start: new Date(2021,11,-12),
            end: new Date(2021,11,-12)
        },
        {
            title: "Personal Pitch",
            allDay: true,
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Resume Lecture",
            allDay: true,
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Behavioral Interviewing",
            allDay: true,
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Technical Interviewing",
            allDay: true,
            start: new Date(2021,11,-11),
            end: new Date(2021,11,-11)
        },
        {
            title: "Online Presence Lecture",
            allDay: true,
            start: new Date(2021,11,-8),
            end: new Date(2021,11,-8)
        },
        {
            title: "Applying Approaches Lecture",
            allDay: true,
            start: new Date(2021,11,-8),
            end: new Date(2021,11,-8)
        },
        {
            title: "Memoization/Recursion",
            allDay: true,
            start: new Date(2021,11,-8),
            end: new Date(2021,11,-8)
        },
        {
            title: "Cover Letter",
            allDay: true,
            start: new Date(2021,11,-7),
            end: new Date(2021,11,-7)
        },
        {
            title: "Tabulation, Naive Sorts",
            allDay: true,
            start: new Date(2021,11,-7),
            end: new Date(2021,11,-7)
        },
        {
            title: "Open Material Completion",
            allDay: true,
            start: new Date(2021,11,-7),
            end: new Date(2021,11,-7)
        },
        {
            title: "Portfolio Site",
            allDay: true,
            start: new Date(2021,11,-6),
            end: new Date(2021,11,-6)
        },
        {
            title: "Negotiation Lecture",
            allDay: true,
            start: new Date(2021,11,-6),
            end: new Date(2021,11,-6)
        },
        {
            title: "Thanksgiving 🦃",
            allDay: true,
            start: new Date(2021,11,-5),
            end: new Date(2021,11,-5)
        },
        {
            title: "Sorts, Search, Linked List & Queues",
            allDay: true,
            start: new Date(2021,11,0),
            end: new Date(2021,11,0)
        },
        {
            title: "Stacks, Queues, BSTs, Trees",
            allDay: true,
            start: new Date(2021,12,-30),
            end: new Date(2021,12,-30)
        },
        {
            title: "Graphs, Heaps, Tries",
            allDay: true,
            start: new Date(2021,12,-29),
            end: new Date(2021,12,-29)
        }
    ]

    return (
        <div className="calender-container">
            <Calendar localizer={localizer} events={allEvents} 
            startAccessor="start" endAccessor="end" 
            style={{height: 500, margin: "50px"}}/>
            
        </div>
    )
}