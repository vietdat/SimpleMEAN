const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var app = express();
const mongoose = require('mongoose');

// API file for interacting with MongoDB
const api = require('./server/routes/api.js');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Conect database
mongoose.connect('mongodb://datle:dat123456@ds157380.mlab.com:57380/learnmongodb');

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '9000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
