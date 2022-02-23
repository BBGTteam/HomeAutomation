module.exports = {
    heatControl: function(msgSplitted, tempBazsi, tempTomi, tempGabi){
        var arduino = require('./arduino');
            switch(msgSplitted[0]){
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
                case "Tomi":
                    if (parseFloat(msgSplitted[1]) < tempTomi && msgSplitted[4] == 1){
                        arduino.sendSerialMessage("0heatTomi");   
                        console.log("Fűtés bekapcs Tomi")
                    }
                    if (parseFloat(msgSplitted[1]) > tempTomi && msgSplitted[4] == 0){
                        arduino.sendSerialMessage("1heatTomi");   
                        console.log("Fűtés kikapcs Tomi")
                    }
                    break
                case "Gabi":
                    if (parseFloat(msgSplitted[1]) < tempGabi && msgSplitted[4] == 1){
                        arduino.sendSerialMessage("0heatGabi");   
                        console.log("Fűtés bekapcs Gabi")
                    }
                    if (parseFloat(msgSplitted[1]) > tempGabi && msgSplitted[4] == 0){
                        arduino.sendSerialMessage("1heatGabi");   
                        console.log("Fűtés kikapcs Gabi")
                    }
                    break

                }
            }
            
        }