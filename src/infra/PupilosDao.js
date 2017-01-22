function PupilosDAO(connection){
	this._connection = connection;
}
PupilosDAO.prototype.listaPupilos = function(callback){
	this._connection.query('select * from user where userTipo = 1',callback);
}
module.exports = function(){
	return PupilosDAO;
}
