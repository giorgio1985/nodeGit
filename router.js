var url=require('url');
var fs=require('fs');

function readHtmlFile(path,response){
	fs.readFile(path, null, function(err, data){
if (err) {
	response.writeHead(404);
	response.end('File not found');
} else {
	response.write(data);
} response.end();
	});
}

module.exports={
	handleRequest: function(request, response){
response.writeHead(200, {'content-type':'text/html'});

var path=url.parse(request.url).pathname;
switch(path){
case '/':  readHtmlFile('./index.html', response); break;
case '/index.html': readHtmlFile('./index.html', response); break;
case '/file.html': readHtmlFile('./file.html', response); break;
case '/followme.html': readHtmlFile('./followme.html', response); break;
default: 
response.writeHead(404);
response.write('Undefined source');
response.end();
}
	}

};