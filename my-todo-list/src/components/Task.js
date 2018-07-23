import React, { Component } from 'react';

import '../Task.css'

class Task extends Component {
    render () {
        return (
            <div className="task">
                <span
                  className="span" 
                  style={{
                    textDecoration: this.props.todo.done ? 'line-through' : 'none',
                    opacity: this.props.todo.done ? '.75' : '1'
                    }}>
                    {this.props.todo.value}
                </span>
                <button 
                  className="button"
                  onClick={() => this.props.onClickChange (this.props.index)}>
                    {this.props.todo.done ? 'Undone' : 'Done'}
                </button>
            </div>
        );
    }
}

export default Task;