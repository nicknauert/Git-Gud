import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    getUserService
  } from "../services.js";
import axios from 'axios';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashBoard">
          
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
