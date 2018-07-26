import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItems from './TodoItems';
class Todos extends Component {

  render() {
  // Declare variable
  let todosItems;

	if(this.props.todos) {
		todosItems = this.props.todos.map(todo => {
			// console.log(project);
			return (
				<TodoItems key={todo.id} todo={todo} />
			);
		});
	}

    return (
      <div className="todos">
        <h2>Todo List</h2>
      	<ul>
       		{todosItems}
      	</ul>
      </div>
    );
  }
}

// Validation
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
