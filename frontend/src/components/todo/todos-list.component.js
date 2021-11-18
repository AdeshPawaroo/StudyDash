// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// const Todo = props => (
//     <tr>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
//         <td>
//             <Link to={"/edit/" + props.todo._id}>Edit</Link>
//         </td>
//     </tr>
// )


// export default class TodosList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             todos: []
//         };
//         this.todoList = this.todoList.bind(this);
//         _isMounted = false; 
//     }

//     componentDidMount() {
//         this._isMounted = true;
//         axios.get('http://localhost:5000/todos')
//             .then(res => {
//                 if (this._isMounted) {
//                     this.setState({
//                         todos: res.data
//                     })
//                 }
//             })
//             .catch(err => console.log(err));
//         // debugger;
//     }

//     componentDidUpdate() {
//         this._isMounted = true;
//         axios.get('http://localhost:5000/todos')
//             .then(res => {
//                 if (this._isMounted) {
//                     this.setState({
//                         todos: res.data
//                     })
//                 }
//             })
//             .catch(err => console.log(err));
//     }

//     componentWillUnmount() {
//         this._isMounted = false; 
//     }

//     // todoList() {
//     // // var newArray = this.state.todos.filter(function (el) { return el.todo_completed;});
//     // // newArray.map((todo, index) => <Todo todo={todo} key={index} />)
//     //     this.state.todos.map((todo, index) => <Todo todo={todo} key={index} />)
//     // }
//     todoList = () => this.state.todos.map(
//         (todo, index) => <Todo todo={todo} key={index} />
//     )


//     render() {
//         // debugger;
//         return (
//             <div>
//                 <h3>Todos List</h3>
//                 <div class="container">
//                     <table className="table table-striped" style={{ marginTop: 20 }}>
//                         <thead>
//                             <tr>
//                                 <th>Description</th>
//                                 <th>Due Date</th>
//                                 <th>Priority</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.todoList()}
//                         </tbody>
//                     </table>
//                 </div>


//                 <Link to={'/create'}>Add a new task</Link>
//             </div>
//         )
//     }
// }