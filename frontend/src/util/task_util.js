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

export function deleteTask(id) {
    return axios.delete(`/api/tasks/${id}`);
}