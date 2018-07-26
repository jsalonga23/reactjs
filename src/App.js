import React, { Component } from 'react';
import Projects from './components/Projects.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Study ReactJS</h1>

        <Projects title="Project John" />

      </div>

    );
  }
}

export default App;
