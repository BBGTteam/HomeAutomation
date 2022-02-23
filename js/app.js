var arduino = require('./arduino');
var messageFromClient = require('./messageFromClient');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const socket = require('socket.io');

const app = express();
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

const server = app.listen(3000,() => {
  console.log('Started in 3000');
});  

const io_chart = socket(server, {
  cors: {
    methods: ["GET", "POST"]
  }  
});  

messageFromClient.listenMessageFromClient(io_chart, socket);

arduino.arduino(io_chart);

// emails.sendEmail("Server start");