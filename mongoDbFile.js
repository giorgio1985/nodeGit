function myFunction(va){  
//giorgio1985 
var http=require('http');
var proto=8000;
http.createServer(function(req, res){
	res.writeHead(200,{'content-type':'text/plain'});
	res.end('Connected to the port number :' +proto+' end the value of the object conteined are : '+va);
}).listen(proto);
console.log('hey up!');
}

var mongo=require('mongodb').MongoClient;
var urlMongodb='mongodb://127.0.0.1:27017/';
var dbMongo='database';
var collections='collection_001';
var oggetto=[
{nome:'Giorgio', cognome:'Agrippino', eta:32, citta:'Milano'},
{nome:'Carlo', cognome:'Fatebenefratelli', eta:66, citta:'Mantova'},
{nome:'Pierangela',cognome:'Venturelli', eta:62, citta:'Brescia'},
{nome:'Alessandro', cognome:'Volta', eta:25, citta:'Padova'},
{nome:'Franco', cognome:'Rossini', eta:55, citta:'Genova'}
];
mongo.connect(urlMongodb, function(err1,resp){
if (err1) throw err1;
var dbconn=resp.db(dbMongo);
dbconn.collection(collections).insertMany(oggetto, function(err3, ok){
if (err3) throw err3;
var jsonString=JSON.stringify(oggetto);
console.log('Vista dei valori presenti nell oggetto: '+jsonString);
myFunction(jsonString);
});
resp.close();
});
