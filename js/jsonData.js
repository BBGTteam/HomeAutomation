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
        // const temp = parseFloat(datas.tempMin);
        // console.log(temp);
        return parseFloat(datas.tempMin);
      },

      getheatState: function(datas){
        return datas.heatState;
      },

      setTemp: function(name, temp){
        jsonReader("./data/db.json", (err, customer) => {
            if (err) {
              console.log("Error reading file:", err);
              return;
            }
            swithByRoom(name, temp, customer);
            fs.writeFile("./data/db.json", JSON.stringify(customer), err => {
              if (err) console.log("Error writing file:", err);
            });
          });
        }
    }
    
    function swithByRoom(name, temp, customer){
      switch(name){
          case "Bazsi":
            customer.Bazsi.tempMin = temp;
            console.log("Bazsi temp: " + temp);
            break;
          case "Tomi":
            customer.Tomi.tempMin = temp;
            console.log("Tomi temp: " + temp);
            break;
          case "Gabi":
            customer.Gabi.tempMin = temp;
            console.log("Gabi temp: " + temp);
            break;
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