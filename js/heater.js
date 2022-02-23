module.exports = {
    heatControl: function(msgSplitted, tempBazsi){
        var arduino = require('./arduino');
            switch(msgSplitted[0]){
                case "Tomi":
                    // if (parseFloat(msgSplitted[1]) < tempBazsi && msgSplitted[4] == 1){
                    //     arduino.sendSerialMessage("0heatBazsi");   
                    //     console.log("Fűtés bekapcs Bazsi")
                    // }
                    // if (parseFloat(msgSplitted[1]) > tempBazsi && msgSplitted[4] == 0){
                    //     arduino.sendSerialMessage("1heatBazsi");   
                    //     console.log("Fűtés kikapcs Bazsi")
                    // }
                    break
                case "Bazsi":
                    if (parseFloat(msgSplitted[1]) < tempBazsi && msgSplitted[4] == 1){
                        arduino.sendSerialMessage("0heatBazsi");   
                        console.log("Fűtés bekapcs Bazsi")
                    }
                    if (parseFloat(msgSplitted[1]) > tempBazsi && msgSplitted[4] == 0){
                        arduino.sendSerialMessage("1heatBazsi");   
                        console.log("Fűtés kikapcs Bazsi")
                    }

                    break
                }
            }
            
        }