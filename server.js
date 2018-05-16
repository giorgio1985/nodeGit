var http=require('http');
var router=require('./router.js');
http.createServer(router.handleRequest).listen(8000);