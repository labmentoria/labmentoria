module.exports = function(app){
    app.get('/mentores',function(req,res){
        var connection = app.infra.connectionFactory();
        var CategoriaDAO = new app.infra.CategoriaDAO(connection);

        CategoriaDAO.lista(function(erros,resultados){
            res.render('mentores/mentores',{lista:resultados});
        });

        connection.end();
    });
};