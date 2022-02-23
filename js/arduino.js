var utils = require('./utils');
var jsonData = require('./jsonData');
var SerialPort = require('serialport');

var port = new SerialPort('/dev/ttyUSB0',{ 
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
  });
  
  port.pipe(parser);

module.exports = {
  arduino: function (io_chart){
    
    parser.on('data', function(data) {
    let setupBazsi = jsonData.getSetup("Bazsi");
    let tempBazsi = jsonData.getTempMin(setupBazsi);
    utils.sendMessage(io_chart, data, tempBazsi);

    });
    
  },
  
  sendSerialMessage: function (message){
      console.log("Message send to arduino: " + message);
      port.write(message);
  }
    
}