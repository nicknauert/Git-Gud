import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import axios from 'axios';
import './styles/App.css';
import Dashboard from './containers/userArea/Dashboard.js';
import UserAchievements from './containers/userArea/UserAchievements.js';
import Navbar from './containers/Navbar.js';
import {
  getUserService
} from "./services.js";

class App extends Component {
  componentWillMount(){
    this.props.getUser('nicknauert');
  }
  componentDidRecieveProps(){
      console.log(this.props);
  }
  render() {

    const _handlePageToggle = (bool) => {
      if(bool){ return Dashboard }
      if(!bool){ return UserAchievements }
    }

    return (
        <div className="App">
          <Navbar />
          <Switch >
            <Route exact path="/" component={_handlePageToggle(this.props.dash)} />
          </ Switch>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user,
      dash: state.dash
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: (user) => dispatch(getUserService(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
