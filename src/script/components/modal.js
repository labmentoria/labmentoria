function loginModal(){
  $('#nav-login').on('click', function(event) {
    event.preventDefault();
    $('#overlay').fadeIn()
    $('#modal-login').fadeIn()
  });
  $('#overlay, #fechar-modal').on('click', function(event) {
    event.preventDefault();
    $('#overlay').fadeOut()
    $('#modal-login').fadeOut()
  });
};
function cadastroModal(){
  $('#nav-cadastro').on('click', function(event) {
    event.preventDefault();
    $('#overlay').fadeIn()
    $('#modal-cadastro').fadeIn()
  });
  $('#overlay, #fechar-modal').on('click', function(event) {
    event.preventDefault();
    $('#overlay').fadeOut()
    $('#modal-cadastro').fadeOut()
  });
  $('#link-cadastro').on('click', function(event){
    event.preventDefault();
    $('#modal-login').fadeOut();
    $('#modal-cadastro').fadeIn();
  });
};

$(document).ready(function() {
  loginModal();
  cadastroModal();
});
