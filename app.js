const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Add header for plain text
    res.write('Hello world');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.writeHead(200, { 'Content-Type': 'application/json' }); // Add header for JSON
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Listening on port 3000...');
});