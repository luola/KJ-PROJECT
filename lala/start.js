
var serverStart = require("./server");
var router = require ("./router");
var requestHandlers = require ("./requestHandlers");
var handle ={};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

serverStart.startServer(router.route,handle);