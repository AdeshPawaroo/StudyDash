import axios from 'axios';

// export const updateUser = user => {
//     return axios.put(`/api/flashcards/${user.id}`, {
//         timeStudied: user.timeStudied
//     })
// }

export const updateUser = (user) => {
    return axios.put(`/api/users/${user.id}`)
}