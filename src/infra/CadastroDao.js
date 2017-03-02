function CadastroDao(connection){
	this._connection = connection;
}
CadastroDao.prototype.salva = function(cadastro,callback){
	this._connection.query('insert into user set ?',cadastro,callback);
}
module.exports = function(){
	return CadastroDao;
}
