var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var methodOverride = require('express-method-override');

module.exports = function(){
  var app = express();
  app.use(express.static('./src/public'))
  app.set('view engine','ejs');
  app.set('views','./src/views');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(methodOverride('_method'));


  load('routes', {cwd: 'src'})
      .then('infra')
      .into(app);

  /*app.use(function(req,res,next){
    res.status(404).render('erros/404');
    next();
  });
  app.use(function(error,req,res,next){
    res.status(500).render('erros/500');
    next();
  });*/
  return app;
}