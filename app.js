// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
const crud = require('./routes/crud.route'); // Imports routes 
app.use('/CRUD', crud);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// set up localhost port
let port = 8080;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://test:ds035747.mlab.com:35747/crudtutorial'; 
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//bodyParser
