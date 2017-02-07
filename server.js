var AlexaAppServer = require('alexa-app-server');

AlexaAppServer.start({
  server_root: __dirname,
  server_dir: 'server',
  app_root: '/alexa/',
  log: true,
  httpsEnabled: true,
  httpsPort: 443,
  port: process.env.PORT || 3000,
  preRequest: function(json, req, res) {
    console.log("preRequest fired");
    json.userDetails = { "name": "Kiana" };
  },
  postRequest: function(json, req, res) {
    json.dummy = "text";
  }
});
