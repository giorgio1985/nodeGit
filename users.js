/*var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
	nome: String,
	username: {type:String, required:true, index: {unique:true}},
	password: {type:String, require:true, select:false}
});

userSchema.pre('save',function(next){
	var user=this;
	if(user.isModified('password')) return next();
	bcrypt.hash(user.password, null, null, function(err, hash){
	if(err) throw err;
	user.password=hash;
	next();
	});
});


userSchema.methods.comparePassword=function(password){
	var user=this;
	return bcrypt.compareSync(password, user.password);
}


module.exports=mongoose.model({'Users': userSchema});*/

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var user=new Schema({
'nome': String,
'cognome': String,
'email': String,
'password': String,
'citta': String,
'ora': Date
});

var users=mongoose.model('users', user);
module.exports=users;
