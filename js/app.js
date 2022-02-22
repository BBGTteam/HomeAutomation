var utils = require('./utils');
var fs = require('fs');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const socket = require('socket.io');

var SerialPort = require('serialport');

const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('/dev/ttyUSB0',{ 
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

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

  socket.on("message", (data) => {
    if (data == '0ledCp') port.write(data);
    if (data == 'Get temp') getTemp();
    if (data == 'Set temp') setTemp();
    
  });  
});  
io_chart.sockets.on('connection', (socket) => {
  console.log(`new connection id: ${socket.id}`);
})

parser.on('data', function(data) {
  utils.sendMessage(io_chart, data, port, temp);
});

function getTemp(){
    const dataFromJSONFile = fs.readFileSync('./data/db.json');
    const dataFromJSON = JSON.parse(dataFromJSONFile);
    const temp = parseFloat(dataFromJSON.users[0].temp);
    console.log(temp);
    return temp;
}

var temp = getTemp();

function setTemp(){
    jsonReader("./data/db.json", (err, customer) => {
      if (err) {
        console.log("Error reading file:", err);
        return;
      }
      // increase customer order count by 1
      customer.users[0].temp += 1;
      console.log(customer.users[0].temp);
      fs.writeFile("./data/db.json", JSON.stringify(customer), err => {
        if (err) console.log("Error writing file:", err);
      });
    });
}

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
  }

// emails.sendEmail("Server start");
