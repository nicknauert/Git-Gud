const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

function getUser( user ) {
    return new Promise((resolve, reject) => {
        axios.get("https://api.github.com/users/" + user)
        .then( res => {
            resolve(res.data)
        })
    })   
}

function getUsersRepos( user ){
    return new Promise((resolve, reject)=> {
        axios.get("https://api.github.com/users/" + user + "/repos?per_page=100")
        .then( res => {
          resolve(res.data)
        })
    })
}

function getUsersOrgs( user ){
    return new Promise((resolve, reject)=> {
        axios.get("https://api.github.com/users/" + user + "/orgs")
        .then( res => {
          resolve(res.data)
        })
    })
}

async function getAllUserData ( user ) {
    let combo = {}
    combo.user = await getUser( user )
    combo.repos = await getUsersRepos( user )
    combo.orgs = await getUsersOrgs( user )
    console.log(combo);
    return combo
}

module.exports = {
    getUser,
    getUsersRepos,
    getAllUserData
}