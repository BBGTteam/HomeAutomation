var heater = require('./heater');

module.exports = {
    sendMessage: function(io_chart, data, tempBazsi){
        msgSplitted = data.split(",");
        swithByRoom(msgSplitted, io_chart);
        heater.heatControl(msgSplitted, tempBazsi);
    }
}

function swithByRoom(dataList, io_chart){
    switch(dataList[0]){
        case "Bazsi":
            data = Array.from({length: 1}, () => msgSplitted)
            io_chart.emit('bazsi_array', data);
            break;
        case "Tomi":
            data = Array.from({length: 1}, () => msgSplitted)
            io_chart.emit('tomi_array', data);
            break;
        case "Gabi":
            data = Array.from({length: 1}, () => msgSplitted)
            io_chart.emit('gabi_array', data);
            break;
    
    }

}