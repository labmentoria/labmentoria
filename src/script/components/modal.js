function loginModal(){
  //Colocando os elementos em uma variavel
  var btnLogin  = document.getElementById('nav-login');
  var overlay   = document.getElementById('overlay');
  var btnFechar = document.getElementById('fechar-modal');
  var modalLogin  = document.getElementById('modal-login');

  //Abrindo modal de login
  if (document.getElementById('nav-login')) {
    btnLogin.addEventListener('click', function(){
      event.preventDefault();
      overlay.classList.add('overlay-active');
      modalLogin.classList.add('modal-active');
    });
  }
  //Fechando modal de login quando click no fundo preto
  if (document.getElementById('overlay')) {
    overlay.addEventListener('click', function(){
      event.preventDefault();
      overlay.classList.remove('overlay-active');
      modalLogin.classList.remove('modal-active');
    });
  }
  //Fechando o modal de login quando clica no x
  if (document.getElementById('fechar-modal')) {
    btnFechar.addEventListener('click', function(){
      event.preventDefault();
      overlay.classList.remove('overlay-active');
      modalLogin.classList.remove('modal-active');
    });
  }
}

window.onload = function(){
  loginModal();
}
