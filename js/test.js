// var fs = require('fs');

// jsonReader("./data/db.json", (err, customer) => {
//     if (err) {
//       console.log("Error reading file:", err);
//       return;
//     }
//     // increase customer order count by 1
//     console.log(customer.users[0].temp);
//     customer.users[0].temp += 1;
//     console.log(customer.users[0].temp);
//     fs.writeFile("./customer.json", JSON.stringify(customer), err => {
//       if (err) console.log("Error writing file:", err);
//     });
//   });
  
//   function jsonReader(filePath, cb) {
//       fs.readFile(filePath, (err, fileData) => {
//         if (err) {
//           return cb && cb(err);
//         }
//         try {
//           const object = JSON.parse(fileData);
//           console.log(object);
//           return cb && cb(null, object);
//         } catch (err) {
//           return cb && cb(err);
//         }
//       });
//     }


const GoogleChartsNode = require('google-charts-node');

// Define your chart drawing function
function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['City', '2010 Population',],
    ['New York City, NY', 8175000],
    ['Los Angeles, CA', 3792000],
    ['Chicago, IL', 2695000],
    ['Houston, TX', 2099000],
    ['Philadelphia, PA', 1526000]
  ]);

  const options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Total Population',
      minValue: 0
    },
    vAxis: {
      title: 'City'
    }
  };

  const chart = new google.visualization.BarChart(container);
  chart.draw(data, options);
}

// Render the chart to image
const image = await GoogleChartsNode.render(drawChart, {
  width: 400,
  height: 300,
});