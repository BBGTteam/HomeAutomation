var jsonData = require('./jsonData');
var arduino = require('./arduino');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const socket = require('socket.io');

const app = express();
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

const server = app.listen(3005,() => {
  console.log('Started in 3005');
});  

const io_chart = socket(server, {
  cors: {
    methods: ["GET", "POST"]
  }  
});  

io_chart.on('connection', function(socket) {
  console.log('Node is listening to chart');
  console.log(`new connection id: ${socket.id}`);
  
  socket.on("message", (data) => {
    if (data == '0ledCp') arduino.sendSerialMessage(data);
    if (data == 'Get temp') getTemp();
    if (data == 'setTemp') jsonData.setTemp();
    
  });  
});  

arduino.arduino(io_chart, temp);

var bazsiSetup = jsonData.getSetup("Bazsi");
var temp = jsonData.getTempMin(bazsiSetup);
console.log(bazsiSetup);

// emails.sendEmail("Server start");
