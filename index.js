var express=require('express');
var app=express();
var bodyP=require('body-parser');
app.use(bodyP.urlencoded({extended:true}));
app.use(bodyP.json());

var fs=require('fs');
var config=require('./config');
var crypto=require('crypto-js');
var mongoose=require('mongoose');
var user=require('./users.js');

app.get('/index', function(req, res){
	fs.readFile(__dirname +'/'+ 'index.html', 'utf8', function(err, data){
		if (err) throw err;
		res.end(data);
		console.log('index file submited!'+config.time);
	});
});
app.listen(config.port);

app.post('/welcome', function(req, res){
	var nome=req.body.nome;
	var cognome=req.body.cognome;
	var email=req.body.email;
	var password=req.body.password;
	var citta=req.body.citta;
	var eta=req.body.eta;

	var stringa={
		'nome': nome,
		'cognome': cognome,
		'email': email,
		'password': crypto.MD5(password).toString(),
		'citta': citta,
		'eta': eta,
		'ora': config.time
	};

	mongoose.connect(config.db, function(err){
		uri_decode_auth: true;
		if (err) throw err;
		console.log('db connected!');
	});

	var conn=mongoose.connection;
	conn.collection('tabella001').insert(stringa, function(err, data){
		if (err) throw err;
		console.log('collection insert!');
	});

	conn.collection('tabella001').find({'nome': 'giorgio'}, function(err, data){
		if (err) throw err;
		console.log(data);
	});

	conn.collection('tabella001').find({}, function(err, data){
		if (err) throw err;
		console.log(data);
	});


	fs.readFile(__dirname +'/'+ 'welcome.html', 'utf8', function(err, data){
		if (err) throw err;
		res.end(data+''+JSON.stringify(stringa));
	});
});

