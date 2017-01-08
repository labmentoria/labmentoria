function PupilosDAO(connection){
	this._connection = connection;
}
PupilosDAO.prototype.listaPupilos = function(callback){
	this._connection.query('SELECT DISTINCT p.*, c.nome AS categoria FROM pupilo AS p  INNER JOIN categoria AS c ON p.idCategoria = c.id WHERE p.status="ativo" ORDER BY p.id ASC',callback);
}
module.exports = function(){
	return PupilosDAO;
}