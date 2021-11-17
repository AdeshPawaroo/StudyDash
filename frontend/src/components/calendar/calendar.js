import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

class CalendarContainer extends React.Component {
  
  render(){
    return (
        <div>
            <Calendar value={dateState} onChange={changeDate} />
        <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
    </div>
        
    )
  }
}