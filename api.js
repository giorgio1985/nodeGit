var User=require('./users');
var config=require('./config');
var secretKey=config.secretKey;

module.exports=function(app, express){
var api=express.router();
api.post('/signup', function(req, res){

	var user=new User({
		nome: req.body.nome,
		username: req.body.username,
		password: req.body.password
	});

	user.save(function(err){
		if (err) throw err;
		res.json({message: 'Db user ha been created!'});
	});
});
return api;
}