var mysql = require('mysql');

var connectMYSQL = function(){
    return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'',
            database:'labmentoria'
    });
};

module.exports = function(){
    return connectMYSQL;
}