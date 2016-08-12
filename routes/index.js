var router = require('koa-router')();
const connectDB = require('../controls/connectDB');

var usersDB = connectDB.users;

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
	usersDB.find(function(err,docs){
		//console.log(docs);
	});
	var result = await sleep(10000,del);
	console.log(result);
  	await ctx.render('index');
})


module.exports = router;
