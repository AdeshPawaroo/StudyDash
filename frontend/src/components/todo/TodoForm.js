import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../../actions/todo_index';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    // debugger;
  }

  onInputChange = event => {
    // debugger;
    this.setState({ text: event.currentTarget.value });
    // debugger;
  };

  onFormSubmit = event => {
    event.preventDefault();
    // console.log('hello')
    // console.log(this.state.text)
    this.props.addNewTodo(this.state.text);
    // console.log(this.state);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form className="form1" onSubmit={this.onFormSubmit}>
        <input
          className="input1"
          name="text"
          value={this.state.text}
          onChange={this.onInputChange}
          placeholder="Enter new task..."
        />
      </form>
    );
  }
}

export default connect(
  null,
  { addNewTodo }
)(TodoForm);
