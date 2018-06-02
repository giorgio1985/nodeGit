var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var morgan=require('morgan');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var api=require('./api')(app,express);
app.use('/api', api);

var fs=require('fs');
var config=require('./config.js');
var mongoose=require('mongoose');

mongoose.connect(config.database, function(err){
if (err) throw err;
console.log('database connected!');
});

app.get('/', function(req, res){
fs.readFile(__dirname +'/'+ 'index.html', 'utf8', function(err, data){
	if (err) throw err;
	res.send(data);
	console.log('Page found! :-) ');
});
});
app.listen(config.ports, function(err,data){
if (err) throw err;
console.log('You are connected at :'+ config.ports);
});

