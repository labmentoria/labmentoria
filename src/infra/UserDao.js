function UserDAO(connection,user_id){
	this._connection = connection;
	this._user_id = user_id;
}
UserDAO.prototype.pupilo = function(callback){
	this._connection.query('SELECT p.*, c.nome AS categoria FROM pupilo AS p  INNER JOIN categoria AS c ON p.idCategoria = c.id WHERE p.id='+this._user_id+' ORDER BY p.id ASC',callback);
}
module.exports = function(){
	return UserDAO;
}
