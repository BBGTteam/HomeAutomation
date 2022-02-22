
var utils = require('./utils');
var SerialPort = require('serialport');

var port = new SerialPort('/dev/ttyUSB0',{ 
  baudRate: 115200,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false
});

module.exports = {
    arduino: function (io_chart, temp){

        const parsers = SerialPort.parsers;
        
        const parser = new parsers.Readline({
            delimiter: '\r\n'
          });
          
          port.pipe(parser);
          
          parser.on('data', function(data) {
            utils.sendMessage(io_chart, data, port, temp);
          });
    },

    sendSerialMessage: function (message){
        port.write(message);
    }
}