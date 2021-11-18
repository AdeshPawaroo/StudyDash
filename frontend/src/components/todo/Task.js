import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../../actions/todo_index';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, text: '' };
  }

  componentDidMount = () => this.setState({ text: this.props.name });

  handleDeleteTodo = event => {
    event.stopPropagation();
    this.props.deleteTodo();
  };

  showEditForm = event => {
    event.stopPropagation();
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  onInputClick = event => {
    event.stopPropagation();
  };

  onInputChange = event => {
    this.setState({ text: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState(prevState => ({ editing: !prevState.editing }));
    this.props.updateTodo(this.props.id, this.state.text);
  };

  render() {
    const { name, done, toggleTodo } = this.props;

    return (
      <li
        className="task1"
        style={{
          textDecoration: done ? 'line-through' : '',
          color: done ? '#bdc3c7' : '#34495e'
        }}
        onClick={toggleTodo}
      >
        <span className="span1" style={{ display: this.state.editing ? 'none' : '' }}>
          {name}
        </span>
        <form
          className="form1"
          style={{ display: this.state.editing ? 'inline' : 'none' }}
          onSubmit={this.onFormSubmit}
        >
          <input
            className="edit-todo"
            type="text"
            value={this.state.text}
            onClick={this.onInputClick}
            onChange={this.onInputChange}
          />
        </form>
        <span className="icon1" onClick={this.handleDeleteTodo}>
          <i className="fas fa-trash" />
        </span>
        <span className="icon1 edit" onClick={this.showEditForm}>
          <i className="fas fa-pen" />
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { updateTodo }
)(Task);
