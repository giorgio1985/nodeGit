var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/application', function (req, res) {
   fs.readFile( __dirname + "/" + "index.html", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/second', function(req, res){
	fs.readFile(__dirname +"/"+ "second.html", 'utf8', function(err, data){
console.log(data);
res.end(data);
	});
});

app.post('/third',function(request,response){
var query1=request.body.gender;
var query2=request.body.textarea;
fs.readFile(__dirname +"/"+ "third.html", 'utf8', function(err, data){
console.log('Gender: '+query1+'\n'+'Your text: '+query2);
response.end(data+query1+'\n'+query2);
	});
});
var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})