import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    getUserService
  } from "../services.js";
import axios from 'axios';
import "../styles/Navbar.css"

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
          <p>GG</p>
          <div className="pageToggle">
            <p className="">DASH</p>
            <div className="toggleGraphic"></div>
            <p className="fade">ACHIEVEMENTS</p>
          </div>
          <p>LOGOUT</p>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (user) => dispatch(getUserService(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
