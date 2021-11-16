// import axios from "axios";
// const apiUrl = "http://localhost:5000/api/tasks";

// export function getTasks() {
//     return axios.get(apiUrl);
// }

// export function addTask(task) {
//     return axios.post(apiUrl, task);
// }

// export function updateTask(id, task) {
//     return axios.put(apiUrl + "/" + id, task);
// }

// export function deleteTask(id) {
//     return axios.delete(apiUrl + "/" + id);
// }

import axios from 'axios';


export function getTasks() {
    return axios.get('/api/tasks/');
}

export function addTask(data) {
    return axios.post('/api/tasks/', data)
}

export function updateTask(id, data) {
    return axios.put('/api/tasks/' + id, data)
}

// export function deleteTask(id) {
//     return axios.delete(`/api/tasks/${id}`);
// }

export function deleteTask(task) {
    return axios.delete(`/api/tasks/${task.id}`);
}