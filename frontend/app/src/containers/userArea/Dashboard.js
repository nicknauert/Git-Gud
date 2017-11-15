import React, { Component } from 'react';
import { connect } from "react-redux";
import UserCard from '../../components/dashboard/UserCard'
import "../../styles/Dashboard.css"
import axios from 'axios';

class Dashboard extends Component {

    render() {
        return (
        <div className="dashBoard">
            <UserCard {...this.props.user}/>
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
        //getUser: (user) => dispatch(getUserService(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
