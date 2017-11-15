import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    getUserService
  } from "../services.js";
import axios from 'axios';
import "../styles/Navbar.css"
import { togglePage } from '../store/actions/index';

class Navbar extends Component {
    
    /////////////////////////
    // Helper Functions

    _handleToggle = () => {
        const toggle = document.querySelector('.toggleBtn')
        const achievements = document.querySelector('.achievements')
        const dash = document.querySelector('.dash')
        toggle.classList.toggle('dashToggle')
        toggle.classList.toggle('achievementToggle')
        dash.classList.toggle("fade");
        achievements.classList.toggle("fade");
        this.props.togglePage();
    }

    render() {
        return (
        <div className="navbar">
            <p>GG</p>
            <div className="pageToggle">
                <p className="dash">DASH</p>
                <div className="toggleCont"  onClick={this._handleToggle} >
                    <div className="toggleBtn dashToggle"/>
                </div> 
                {/* <input className="pageToggleBox" type="checkbox" name="pageToggle" />
                <label for="pageToggle"><span><span></span></span></label> */}
                <p className="achievements fade">ACHIEVEMENTS</p>
            </div>
            <p>LOGOUT</p>
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
        getUser: (user) => dispatch(getUserService(user)),
        togglePage: () => dispatch(togglePage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
