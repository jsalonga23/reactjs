import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id) {
    // console.log('test');
    this.props.onDelete(id);
  }

  render() {
  	// console.log(this.props);
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <a onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

// Validation
ProjectItem.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
}

export default ProjectItem;
