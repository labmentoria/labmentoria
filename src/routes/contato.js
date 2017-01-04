module.exports = function(app){
    app.get('/contato',function(req,res){
    	res.render('contato/contato');
    });
};