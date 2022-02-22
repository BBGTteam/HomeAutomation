module.exports = {
  getApp: function (http, html){
    return http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    })
  },

  get_io: function (app){
    return require('socket.io')(app, {
      allowEIO3: true,
      cors: {
        methods: ["GET", "POST"]
      }
    });
  }
}