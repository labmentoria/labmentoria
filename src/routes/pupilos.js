module.exports = function(app){
	app.get('/pupilos',function(req,res){
		var connection = app.infra.connectionFactory();
		var PupilosDao = new app.infra.PupilosDao(connection);
		PupilosDao.listaPupilos(function(erros,resultados){
			res.render('pupilos/pupilos',{listaPupilos:resultados});
		});
		connection.end();
	});
};