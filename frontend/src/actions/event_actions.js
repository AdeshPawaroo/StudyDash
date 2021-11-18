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