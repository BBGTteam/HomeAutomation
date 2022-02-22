var jsonData = require('./jsonData');
var arduino = require('./arduino');

module.exports = {
    listenMessageFromClient: function (io_chart){
        io_chart.on('connection', function(socket) {
            console.log('Node is listening to chart');
            console.log(`new connection id: ${socket.id}`);
            
            socket.on("message", (data) => {
            if (data == 'Get temp') getTemp();
            if (data.includes('setTemp')) splitMessage(data);
            else arduino.sendSerialMessage(data);
            });  
        });  
    }    
}

function splitMessage(message){
    msgSplitted = message.split(",");
    swithByRoom(msgSplitted);
}

function swithByRoom(dataList){
    switch(dataList[0]){
        case "Bazsi":
            jsonData.setTemp("Bazsi", dataList[2])
            break;
        case "Tomi":
            jsonData.setTemp("Tomi", dataList[2])
            break;
        case "Gabi":
            jsonData.setTemp("Gabi", dataList[2])
            break;
    }
}