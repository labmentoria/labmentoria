function UserDAO(connection,user_id){
	this._connection = connection;
	this._user_id = user_id;
}
UserDAO.prototype.pupilo = function(callback){
	this._connection.query('SELECT * FROM pupilo WHERE id='+this._user_id+'',callback);
}
module.exports = function(){
	return UserDAO;
}