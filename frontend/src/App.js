import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './styles/App.css';
import Dashboard from './containers/userArea/Dashboard.js';
import Navbar from './containers/Navbar.js';

class App extends Component {


  render() {
    return (
        <div className="App">
          <Navbar />
          <Switch >
            <Route exact path="/" component={() => <Dashboard />} />
          </ Switch>
          
        </div>
    );
  }
}

export default App;
