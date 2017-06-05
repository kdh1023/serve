
/*
 * GET users listing.
 */

module.exports = {
	list : function(req, res){
		res.send("respond with a resource");
	},
	selectUserInfo : function(req, res, connection){
		var query  = connection.query('select * from serve.user', function(err, rows){
			console.log(rows);
			res.json(rows);
		});
	}
};