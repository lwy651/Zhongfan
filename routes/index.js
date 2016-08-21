var router = require('koa-router')();
const connectDB = require('../controls/connectDB');
const render = require('./../lib/render');

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

router.get('/login',home);
router.get('/',suceess);
router.get('/getusername',getusername);

async function suceess(ctx,next){
	console.log(ctx.request.body.username);
	ctx.body = await render('suceess',ctx.request.body);
}

async function home(ctx,next){
	var dd;
	await usersDB.find(function(err,docs){
		dd       = docs[0];
	});
	ctx.body = await render('index',{title:'登录'});
}

async function getusername(ctx,next){
	ctx.body = 1;
}

/*router.get('/', async function (ctx, next) {
	await usersDB.find(function(err,docs){
		dd       = docs[0];
		//ctx.body = dd;
	});
	ctx.body = await render('error');
  	//await ctx.render('index');
})*/


module.exports = router;
