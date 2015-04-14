var restify = require('restify'),
  message = require('@bcoe/awesomeify').message,
  server = restify.createServer();

server.get('/', function indexHTML(req, res, next) {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(message);
  next();
});

server.listen(process.env.PORT);
