import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import { Container, Row, Col } from 'reactstrap';
import Projects from './components/Projects';
import Todos from './components/Todos';
import AddProject from './components/AddProject';
import Banner from './components/Banner';
import Navigation from './components/Navigation';
import './styles/App.css';


class App extends Component {
// Variable Data on Load
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: [],
    }
  }

  getTodos() {

    // Simple Like ajax
    fetch('https://jsonplaceholder.typicode.com/todos')
          .then(res => res.json())
          .then(data => this.setState({todos: data}));

    // $.ajax({
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //
    //     this.setState({todos: data}, function() {
    //       // console.log(this.state);
    //     });
    //
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //   }
    // });
  }

  getProjects() {
    this.setState({

      projects: [
        {
          id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          id:uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce Shopping cart',
          category: 'Web Development',
        },
      ]
    });
  }

  // LifeCycle React
  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  // Functions that handle the state in Form Add Project
  handleAddProject(project) {

    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  handleDeleteProject(id) {

    // console.log(project);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  // Required JSX Function
  render() {
    return (
      // Note: one main Div
      <div className="App">
        <Container>
          <Row>
            <Col lg="12">
              <Navigation />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <div className="banner-container">
                <Banner />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <AddProject addProject={this.handleAddProject.bind(this)}/>
            </Col>
            <Col lg="8">
              <Projects pageTitle="All Projects" projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Todos todos={this.state.todos}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
