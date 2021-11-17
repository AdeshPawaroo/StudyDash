import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)


export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.todoList = this.todoList.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err));
        // debugger;
    }

    componentDidUpdate() {
        axios.get('http://localhost:5000/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err));
    }

    // todoList() {
    // // var newArray = this.state.todos.filter(function (el) { return el.todo_completed;});
    // // newArray.map((todo, index) => <Todo todo={todo} key={index} />)
    //     this.state.todos.map((todo, index) => <Todo todo={todo} key={index} />)
    // }
    todoList = () => this.state.todos.map(
        (todo, index) => <Todo todo={todo} key={index} />
    )


    render() {
        // debugger;
        return (
            <div>
                <h3>Todos List</h3>
                <div class="container">
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Responsible</th>
                                <th>Priority</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.todoList()}
                        </tbody>
                    </table>
                </div>


                <Link to={'/create'}>Add a new task</Link>
            </div>
        )
    }
}