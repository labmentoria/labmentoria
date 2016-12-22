var app = require('./config/express')();
var http = require('http').Server(app);

app.listen(3000, function(){
  console.log('servidor rodando');
});