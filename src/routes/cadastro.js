const nodemailer = require('nodemailer');
module.exports = function(app){
	app.get('/cadastro',function(req,res){
		res.render('cadastro/cadastro');
	});
	app.post('/cadastro/salva',function(req,res){
		var cadastro = req.body;
		var cadastroTipo = `${cadastro.userTipo}`;
		console.log(cadastroTipo);
		var connection = app.infra.connectionFactory();
		var CadastroDao = new app.infra.CadastroDao(connection);
		if( cadastroTipo == 1){
			CadastroDao.salva(cadastro,function(erros,resultados){
				var _0x79a4=["\x67\x6D\x61\x69\x6C","\x6C\x61\x62\x6D\x65\x6E\x74\x6F\x72\x69\x61\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x6C\x61\x62\x40\x63\x6F\x70\x74\x31\x35","\x63\x72\x65\x61\x74\x65\x54\x72\x61\x6E\x73\x70\x6F\x72\x74"];let transporter=nodemailer[_0x79a4[3]]({service:_0x79a4[0],auth:{user:_0x79a4[1],pass:_0x79a4[2]}})

				let mailOptions = {
					from: `labmentoria@gmail.com`,
					to: `${cadastro.userEmail}`,
					subject: `Cadastro Lab Mentoria`,
					html: `Obrigado por se cadastrar Mentor!`
				};
				transporter.sendMail(mailOptions, (error, info) => {
	          if (error) {
	              return console.log(error);
	          }else{
	            res.render('cadastro/salva');
	          }
	      });
			});
		}else{
			CadastroDao.salva(cadastro,function(erros,resultados){
				var _0x79a4=["\x67\x6D\x61\x69\x6C","\x6C\x61\x62\x6D\x65\x6E\x74\x6F\x72\x69\x61\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x6C\x61\x62\x40\x63\x6F\x70\x74\x31\x35","\x63\x72\x65\x61\x74\x65\x54\x72\x61\x6E\x73\x70\x6F\x72\x74"];let transporter=nodemailer[_0x79a4[3]]({service:_0x79a4[0],auth:{user:_0x79a4[1],pass:_0x79a4[2]}})

				let mailOptions = {
					from: `labmentoria@gmail.com`,
					to: `${cadastro.userEmail}`,
					subject: `Cadastro Lab Mentoria`,
					html: `Obrigado por se cadastrar Pupilo!`
				};
				transporter.sendMail(mailOptions, (error, info) => {
	          if (error) {
	              return console.log(error);
	          }else{
	            res.render('cadastro/salva');
	          }
	      });
			});
		}
	});
};
