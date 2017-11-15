import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    getUserService
  } from "../../services.js";
import UserCard from '../../components/dashboard/UserCard'
import "../../styles/Dashboard.css"
import axios from 'axios';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getUser('nicknauert');
    }
    componentDidRecieveProps(){
        console.log(this.props);
    }

    render() {
        return (
        <div className="dashBoard">
            <UserCard />
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
