function CategoriaDAO(connection){
    this._connection = connection;
}

CategoriaDAO.prototype.lista = function(callback){
    this._connection.query('select * from user where userTipo = 2',callback);
}

module.exports = function(){
    return CategoriaDAO;
}
