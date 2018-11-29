const http = require('http');
const message=process.env.msg || "No environmental variable(msg)";
http.createServer(function (req, res) {
    res.write(message); //write a response to the client
    res.end(); //end the response
}).listen(8001);
