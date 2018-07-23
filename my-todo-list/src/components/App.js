import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';


class App extends Component {

  state = {
    inputValue: '',
    todos: []
  }

  onHandleChange = (e) => {
    this.setState({
      inputValue:e.target.value
    })
  }

  onSubmitChange = (e) => {
    e.preventDefault();
    const newValue = {
      value: this.state.inputValue,
      done: false
    }

    const todos = this.state.todos;
    todos.push(newValue);

    this.setState({
      todos: todos,
      inputValue: ''
    })
  }

  onClickChange = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          onSubmitChange={this.onSubmitChange} 
          onHandleChange={this.onHandleChange}
          value={this.state.inputValue}
        />
        <List 
          todos={this.state.todos}
          onClickChange={this.onClickChange}
        /> 
      </div>
    );
  }
}

export default App;
