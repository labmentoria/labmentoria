function UserDAO(connection,user_id){
	this._connection = connection;
	this._user_id = user_id;
}
UserDAO.prototype.pupilo = function(callback){
	this._connection.query('select user.*, categoria.nome from user inner join categoria on user.userCategoria = categoria.id where userId ='+this._user_id+'',callback);
}
module.exports = function(){
	return UserDAO;
}
