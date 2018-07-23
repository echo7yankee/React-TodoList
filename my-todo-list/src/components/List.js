import React, { Component } from 'react';

import '../List.css'

import Task from './Task';

class List extends Component {
    render () {
        return (
            <div className="list">
                 {this.props.todos.map((todo, index) => {
                     return (
                         <Task 
                           key={index}
                           index={index}
                           todo={todo}
                           onClickChange={this.props.onClickChange}
                         />
                     );
                 })}
            </div>
        );
    }

}

export default List;