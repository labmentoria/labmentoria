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
$(document).ready(function() {
  loginModal();
});
