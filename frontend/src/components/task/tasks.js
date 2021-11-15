import React from 'react';
import { withRouter } from 'react-router-dom';
import TaskBox from './task_box';

class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentWillMount() {
        this.props.fetchUserTasks();
    }

    componentWillReceiveProps(newState) {
        this.setState({ tasks: newState.tasks });
    }

    render() {
        if (this.state.tasks.length === 0) {
            return (<div>There are no Tasks</div>)
        } else {
            return (
                <div>
                    <h2>All Tasks</h2>
                    {this.state.tasks.map(task => (
                        <TaskBox key={task._id} text={task.text} />
                    ))}
                </div>
            );
        }
    }
}

export default withRouter(Tasks);
















// import React, { Component } from 'react';
// import { addTask, getTasks, updateTask, deleteTask } from "./../../util/task_util";

// class Tasks extends Component {
//     state = { tasks: [], currentTask: ""}

//     async componentDidMount(){
//         try {
//             const { data } = await getTasks();
//             this.setState({tasks: data});
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     handleChange = ({currentTarget: input}) => {
//         this.setState({currentTask: input.value});
//     }
//     handleSubmit = async (e) => {
//         e.preventDefault();
//         const originalTasks = this.state.tasks 
//         try { 
//             const {data} = await addTask({ task: this.state.currentTask});

//         } catch (error) {
//             console.log(error);
//         }
//     }
//     handleUpdate = async (currentTask) => {
//         const originalTasks = this.state.tasks;
//         try {
//             const tasks = [...originalTasks];
//             const index = tasks.findIndex((task) => task._id === currentTask);
//             tasks[index] = {...tasks[index]};
//             tasks[index].completed = !tasks[index].completed;
//             this.setState({tasks});
//             await updateTask(currentTask, {completed: tasks[index].completed})
//         } catch (error) {
//             this.setState({tasks: originalTasks})
//             console.log(errors)
//         }
//     }
//     handleDelete = async (currentTask) => {
//         const originalTasks = this.state.tasks; 
//         try {
//             const tasks = originalTasks.filter(
//                 (task) => task._id !== currentTask
//             );
//             this.setState({tasks});
//             await deleteTask(currentTask);
//         } catch (error) {
//             this.setState({tasks: originalTasks})
//             console.log(tasks)
//         }
//     }
// }