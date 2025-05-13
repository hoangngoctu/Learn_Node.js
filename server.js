const { createServer } = require('node:http');// node.js có sẵn module http
// tạo server http
const hostname = '127.0.0.1'; // localhost 
const port = 3000; // port server


const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Hoang Ngoc Tu dz');
});
//chayj server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
