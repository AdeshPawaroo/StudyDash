import axios from 'axios';

export const getEvents = () => {
  return axios.get('/api/events')
};

export const addEvent = data => {
  return axios.post('/api/events/', data)
}