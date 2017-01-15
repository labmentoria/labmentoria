var mysql = require('mysql');

var connectMYSQL = function(){
  if(!process.env.NODE_ENV){
    return mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'labmentoria'
    });
  }
  if(!process.env.NODE_ENV == 'test'){
    return mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'labmentoria'
    });
  }
  if(process.env.NODE_ENV == 'production') {
    var urlDeConexao = proces.env.CLEARDB_DATABASE_URL;
    var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
    return mysql.createConnection({
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database:  grupos[4]
    });
  }
};

module.exports = function(){
    return connectMYSQL;
}
