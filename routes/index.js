var router = require('koa-router')();
const connectDB = require('../controls/connectDB');

var usersDB = connectDB.users;
router.get('/', async function (ctx, next) {
	usersDB.find(function(err,docs){
		console.log(docs);
	})
  	await ctx.render('index');
})
module.exports = router;
