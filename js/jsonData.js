var fs = require('fs');

module.exports = {
    getSetup: function(room){
        var setup = {};
        const dataFromJSONFile = fs.readFileSync('./data/db.json');
        const dataFromJSON = JSON.parse(dataFromJSONFile);
        switch(room){
          case "Bazsi":
            setup = dataFromJSON.Bazsi;
            return setup;
          
          case "Tomi":
            setup = dataFromJSON.Tomi;
            return setup;
          
          case "Gabi":
            setup = dataFromJSON.Gabi;
            return setup;
          
        }
        console.log(temp);
      },

      getTempMin: function(datas){
        const temp = parseFloat(datas.tempMin);
        console.log(temp);
        return temp;
      },

      setTemp: function(){
        jsonReader("./data/db.json", (err, customer) => {
            if (err) {
              console.log("Error reading file:", err);
              return;
            }
            // increase customer order count by 1
              customer.Bazsi.tempMin += 1;
              console.log(customer.Bazsi.tempMin);
              fs.writeFile("./data/db.json", JSON.stringify(customer), err => {
                if (err) console.log("Error writing file:", err);
              });
            });
        }
      
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