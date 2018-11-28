const http = require('http');
const message=process.env.msg;
http.createServer(function (req, res) {
    res.write(message); //write a response to the client
    res.end(); //end the response
}).listen(8001);
