import { addEvent, getEvemts } from '../util/events_api_util';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";

export const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

export const receiveNewEvent = event => ({
    type: RECEIVE_NEW_EVENT,
    event
})

export const fetchEvents = () => dispatch => (
    getEvent()
        .then(events => dispatch(receiveEvents(events)))
        .catch(err => console.log(err))
);

export const createEvent = (data) => dispatch => (
    writeEvent(data)
        .then(event => dispatch(receiveNewEvent(event)))
        .catch(err => console.log(err))
);