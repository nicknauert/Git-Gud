const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const { 
  getUser,
  getUsersRepos,
  getAllUserData
} = require('./helpers.js') 

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////
// ROUTES
/////////////

////// USER ROUTES

// Get a single user
app.get("/users/:user", async (req, res) => {
  const userData = await getAllUserData(req.params.user)
  console.log("App.js >> ", userData);
  res.send(userData);
});

// Get a users orgs
app.get("/users/:user/orgs", (req, res) => {
  axios.get("https://api.github.com/users/" + req.params.user + "/orgs")
    .then( gitRes => {
      res.send(gitRes.data)
    })
});

// Get a users followers
app.get("/users/:user/followers", (req, res) => {
  axios.get("https://api.github.com/users/" + req.params.user + "/followers?per_page=100")
    .then( gitRes => {
      res.send(gitRes.data)
    })
});


/////// REPOSITORY ROUTES

// Get single repo
app.get("/repos/:owner/:repo", (req, res) => {
  axios.get("https://api.github.com/repos/" + req.params.owner + "/" + req.params.repo)
    .then( gitRes => {
      res.send(gitRes.data)
    })
});


/////// ORGANIZATION ROUTES

// Get single org
app.get("/orgs/:org", (req, res) => {
  axios.get("https://api.github.com/orgs/" + req.params.org)
    .then( gitRes => {
      res.send(gitRes.data)
    })
});



/////////////////////////
// PORT OF CALL

app.set("port", 4000);

app.listen(app.get("port"), () => {
  console.log("App Started 4000. Now Git Gud!");
});

module.exports = app;
