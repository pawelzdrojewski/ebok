var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'zdrojopl_api',
	password:'B@z@123!',
	database:'zdrojopl_api'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;