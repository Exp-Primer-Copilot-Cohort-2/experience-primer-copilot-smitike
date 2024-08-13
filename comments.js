const http = require('http');

// Create web server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

// Run the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});