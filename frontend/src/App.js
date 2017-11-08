import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';
import Dashboard from './containers/Dashboard.js';
import Navbar from './containers/Navbar.js';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Navbar />
          <Dashboard />
        </div>
    );
  }
}

export default App;
