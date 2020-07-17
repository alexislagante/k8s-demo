const express = require('express');
const http = require('http');
const ip = require('ip');
const os = require("os");
const uuidv4 = require('uuid').v4;
const app = express();
const port = process.env.PORT || 3000;
const loremIpsum = require("lorem-ipsum").loremIpsum;

app.get('/healthcheck', function (req, res) {
    res.send({ success: true });
});

app.get('/', function (req, res) {
    res.send({
        hostname: req.headers.host,
        server_id: ip.address(),
        local_hostname: os.hostname(),
        environment: process.env.APP_ENV || 'dev',
        uuid: uuidv4(),
        message: loremIpsum()
    });
});

http.createServer(app).listen(port);
console.log(`started listening on port ${port}`)