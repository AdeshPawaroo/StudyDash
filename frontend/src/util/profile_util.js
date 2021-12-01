import axios from 'axios';

export const updateUser = userId => {
    return axios.put(`/api/flashcards/${userId}`)
}