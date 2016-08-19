var router = require('koa-router')();
const connectDB = require('../controls/connectDB');

var usersDB = connectDB.users;
var dd;

var del = function(){
	return 123;
};

var sleep = function(time){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve(del());
		},time);
	});
};

router.get('/', async function (ctx, next) {
	await usersDB.find(function(err,docs){
		dd       = docs[0];
		//ctx.body = dd;
	});
  	await ctx.render('index');
})


module.exports = router;
