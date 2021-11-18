import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class Lists extends Component {
  render() {
    return (
      <div className="bgdivlist">
        <header className="header-h1">
          <h1 className="headerh1">
            <span className="h1span">Tasks</span>
          </h1>
          {/* <h2> A MERN (MongoDB + Express.js + React.js + Node.js) Stack Todo-List Lists </h2> */}
        </header>
        <TodoList />
      </div>
    );
  }
}

export default Lists;
