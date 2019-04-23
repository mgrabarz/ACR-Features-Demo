'use strict';
var http = require('http');
var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.end('Base image version: ' + process.env.BASE_IMAGE + '\n');
}).listen(port);
