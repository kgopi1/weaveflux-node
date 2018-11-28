const http = require('http');
const message=process.argv[2];
http.createServer(function (req, res) {
    res.write(message); //write a response to the client
    res.end(); //end the response
}).listen(8001);
