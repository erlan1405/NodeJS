//console.log("Hello World");

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World!\n');

    if (req.url === '/') {
        // main route
        res.statusCode = 200;
        res.end('Hello World!\n');
    } else if (req.url === '/about') {
        // about route
        res.statusCode = 200;
        res.end('About Page\n');
    } else {
        // for other routes give status "404"
        res.statusCode = 404;
        res.end('Not Found\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
