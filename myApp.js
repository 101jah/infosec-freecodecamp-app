const express = require('express');
const helmet = require('helmet');
const app = express();

var timeInSeconds = 90*24*60*60;





app.use(helmet({
  rameguard: {         // configure
    action: 'enable'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false,
  hidePoweredBy: false,
  frameguard: { action: 'deny' },
  xssFilter: false,
  noSniff: false,
  ieNoOpen: false,
  hsts: {maxAge: timeInSeconds, force: true},
  dnsPrefetchControl: false,
  noCache: false






}));














module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`101jah Info Security server started on port ${port}`);
});
