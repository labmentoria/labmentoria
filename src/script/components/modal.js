//Colocando os elementos em uma variavel para fazer a função do click
var btnLogin  = document.getElementById('nav-login');
var overlay   = document.getElementById('overlay');
var btnFechar = document.getElementById('fechar-modal');

//Colocando os elementos em uma variavel para fazer os efeitos
var modalLogin  = document.getElementById('modal-login');

//Abrindo modal de login
btnLogin.addEventListener('click', function(){
  event.preventDefault();
  overlay.className += ' overlay-active';
  modalLogin.className += ' modal-active';
});
//Fechando modal de login quando click no fundo preto
overlay.addEventListener('click', function(){
  event.preventDefault();
  overlay.classList.remove('overlay-active');
  modalLogin.classList.remove('modal-active');
});
//Fechando o modal de login quando clica no x
btnFechar.addEventListener('click', function(){
  event.preventDefault();
  overlay.classList.remove('overlay-active');
  modalLogin.classList.remove('modal-active');
});
