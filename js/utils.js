class UtilsWithio{
    constructor(io, port, temp){
        this.io = io;
        this.port = port;
        this.temp = temp;
    }
    
    //Fűtés vezérlése
    heatControl(data){
            switch(data[0]){
                case "Tomi":
                    if (parseFloat(data[1]) < this.temp){
                        this.port.write('0ledCp');
                        console.log("Fűtés bekapcs Tomi")
                    }
                    break
                case "Bazsi":
                    if (parseFloat(data[1]) < 25){
                        console.log("Fűtés bekapcs Bazsi")
                    }
                    break
                }
            }
}
 
module.exports = {
    sendMessage: function(io_chart, data, port, temp){
        msgSplitted = data.split(",");
        swithByRoom(msgSplitted, io_chart);
        // ut = new UtilsWithio(io, port, temp);
        // ut.heatControl(msgSplitted);
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