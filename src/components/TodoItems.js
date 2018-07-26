import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {

  render() {
  	// console.log(this.props);
    let completionStatus;

    if(this.props.todo.completed) {
      completionStatus = <span>Done</span>
    } else {
      completionStatus = <span>On Process</span>
    }

    return (
      <li className="TodoItems">
        <strong>{this.props.todo.title}</strong> : {completionStatus}
      </li>
    );
  }
}

// Validation
TodoItems.propTypes = {
    todo: PropTypes.object,
}

export default TodoItems;
