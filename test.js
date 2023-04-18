const fs = require('fs');
const http = require('http');
const qs = require('querystring');
const server = http.createServer();
const tours = fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`);

server.on('request', (req, res) => {
  if (req.method == 'POST') {
    if (req.url == '/api/v1/tours') {
      console.log(req.body);
      res.end('Done');
    }
  } else if (req.method == 'GET') {
    if (req.url == '/api/v1/tours') {
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(tours);
    }
  }
});

// app.post('/api/v1/tours', (req, res) => {
//   console.log(req.body);
//   res.send('Done');
// });

server.listen(6000, '127.0.0.1', () => {
  console.log('Listening on port 6000');
});
