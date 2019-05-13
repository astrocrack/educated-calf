const express = require('express');
var request = require('request');
const app = express()
app.get('/', function(req, res) {
    request.get('https://cdn.glitch.com/f60e7d74-89f8-4c34-86c6-3e32fb5c7f91%2F1.txt?1505916425051', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var csv = body;
            // Continue with your processing here.
            var split_lines = body.split("\n");
            var aux = split_lines.length - 1;
            var rand = Math.floor(Math.random() * (split_lines.length));
            res.send(split_lines[rand]);
            // res.send(body);
        }
    });
})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})