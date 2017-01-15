module.exports = function(app){
	app.get('/user',function(req,res){
		var user_id = req.param('id');
		var connection = app.infra.connectionFactory();
		var UserDao = new app.infra.UserDao(connection,user_id);
		UserDao.pupilo(function(erros,resultados){
			res.render('user/user',{pupilo:resultados});
			console.log(resultados);
		});
		connection.end();
	});
};
