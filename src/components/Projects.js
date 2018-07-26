import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
class Projects extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
  // Declare variable
  let projectItems;

	if(this.props.projects) {
		projectItems = this.props.projects.map(project => {
			// console.log(project);
			return (
				<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
			);
		});
	}

    return (
      <div className="projects">
        <h2>{this.props.pageTitle}</h2>
      	<ul>
       		{projectItems}
      	</ul>
      </div>
    );
  }
}

// Validation
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDelete: PropTypes.func
}

export default Projects;
