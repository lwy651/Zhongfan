const mongoose = require('mongoose');
const config = require('../config');

var db = mongoose.connect(config.db);
db.connection.on('error',console.error.bind(console,'数据库连接出差！！！'));
db.connection.on('open',function(){
  console.log('数据库连接成功');
});

var usersSchema = new mongoose.Schema({
	_id     :{type:String},
	username:    {type:String},
	userpassword:{type:String}
});

const usersDB = function(){
	return mongoose.model('users',usersSchema);
}

module.exports.users = mongoose.model('users',usersSchema);