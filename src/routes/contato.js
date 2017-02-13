const nodemailer = require('nodemailer');

module.exports = function(app){
    app.get('/contato',function(req,res){
    	res.render('contato/contato');
    });
    app.post('/contato/envia-contato',function(req,res){
      var content = req.body;
      var _0x79a4=["\x67\x6D\x61\x69\x6C","\x6C\x61\x62\x6D\x65\x6E\x74\x6F\x72\x69\x61\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x6C\x61\x62\x40\x63\x6F\x70\x74\x31\x35","\x63\x72\x65\x61\x74\x65\x54\x72\x61\x6E\x73\x70\x6F\x72\x74"];let transporter=nodemailer[_0x79a4[3]]({service:_0x79a4[0],auth:{user:_0x79a4[1],pass:_0x79a4[2]}})
      let mailOptions = {
          from: `${content.email}`,
          to: 'labmentoria@gmail.com',
          subject: `${content.assunto}`,
          html: `<b>Nome: </b>${content.name}<br /><br /><b>E-mail: </b>${content.email}<br /><br /><b>Mensagem</b><br /><br />${content.mensagem}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }else{
            res.render('contato/envia-contato');
          }
      });
    });
};
