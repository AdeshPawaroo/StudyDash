import { getTasks, addTask, updateTask, deleteTask} from '../util/task_util'
export const RECEIVE_USER_TASKS = "RECEIVE_USER_TASKS";
export const RECEIVE_NEW_TASK = "RECEIVE_NEW_TASK";


export const receiveUserTasks = tasks => ({
    type: RECEIVE_USER_TASKS,
    tasks
});

export const receiveNewTask = task => ({
    type: RECEIVE_NEW_TASK,
    task
})

export const fetchUserTasks = id => dispatch => (
    getTasks(id)
        .then(tasks => dispatch(receiveUserTasks(tasks)))
        .catch(err => console.log(err))
);

export const composeTask = data => dispatch => (
    addTask(data)
        .then(task => dispatch(receiveNewTask(task)))
        .catch(err => console.log(err))
);
