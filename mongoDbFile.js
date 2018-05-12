function foo(ob){  
var http=require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'content-type':'text/plain'});
	res.end('hello mongo...'+ob);
}).listen(5000);
console.log('hell boy..');
}

var mongoo=require('mongodb').MongoClient;
var mongoodb='namedb';
var mongoohost='mongodb://127.0.0.1:27017/';
var mongoocollection='collectiondb';
var oggetto={nome:'Giorgio',cognome:'Asterix', anni:32, citta:'Milano'};

mongoo.connect(mongoohost, function(err,ris){
	if (err) throw err;
	var Db=ris.db(mongoodb);
	Db.collection(mongoocollection).insertOne(oggetto, function(err, res){
if (err) throw err;
var obj=JSON.stringify(oggetto);
console.log('Dati inseriti sono');
foo(obj);
	});
	Db.collection(mongoocollection).find({}).toArray(function(err,data){
		if (err) throw err;
		console.log(data);
	});

	ris.close();
});
