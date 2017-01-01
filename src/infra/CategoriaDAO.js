function CategoriaDAO(connection){
    this._connection = connection;
}

CategoriaDAO.prototype.lista = function(callback){
    this._connection.query('SELECT m.*, c.nome AS categoria FROM mentor AS m  INNER JOIN categoria AS c ON m.categoria = c.id  ORDER BY m.id ASC',callback);
}

module.exports = function(){
    return CategoriaDAO;
}