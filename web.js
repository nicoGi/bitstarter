var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response)
{
    var fs = require('fs');
    var filename = "index.html";
    var buffer = fs.readFileSync(filename);
    var text_to_display = buffer.toString();
    response.send(text_to_display);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
