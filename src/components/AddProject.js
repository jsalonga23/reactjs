import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddProject extends Component {
  // Setting Default properties - Data declaration to use
  constructor() {
    super();
    this.state = {
      newProject:{},
      title:'',
      category:''
    }
    // Binding Events handler
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.title);

    if(this.state.title.value==='') {
      alert('Title is required');
    }else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.state.title,
        category: this.state.category
      }}, function() {
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }

  }
  // Changing value
  onChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  render() {

    let categoryOptions = this.props.categories.map( category => {
      return <option key={category} value={category}>{category}</option>
    });

    return(

      <div className="AddProject">
        <h2>Add project</h2>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <Label for="titleExample">Title</Label>
            <Input name="title" type="text" id="titleExample" placeholder="Title" value={this.state.title} onChange={this.onChange} />

          </FormGroup>
          <FormGroup>
            <Label for="categoryExample">Category</Label>
            <Input type="select" id="categoryExample" name="category" value={this.state.category} onChange={this.onChange}>
              {categoryOptions}
            </Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>

    );

  }
}

// Validation
AddProject.propTypes = {
    projects: PropTypes.array,
    category: PropTypes.array,
    addProject: PropTypes.func
}


export default AddProject;
