import React, { Component } from 'react';
import { connect } from "react-redux";
import "../../styles/Dashboard.css"
import axios from 'axios';

class UserAchievements extends Component {

    render() {
        return (
        <div className="achievements">
            <p>'cheeves</p>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAchievements);
