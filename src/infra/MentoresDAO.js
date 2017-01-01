function MentoresDAO(connection){
	this._connection = connection;
}

MentoresDAO.prototype.lista = function(callback){
	this._connection.query('select * from mentor',callback);
}

module.exports = function(){
	return MentoresDAO;
}