var navAccount;
var headerLogin;

function nav(){

  //Verificando se existe o elemento
  if (document.getElementById('nav-mobile')) {
    //Colocando os elementos  de click em uma variavel
    navMobile  = document.getElementById('nav-mobile');
    headerMenu  = document.getElementById('header-menu');
    navAccount = document.getElementById('nav-login-mobile');
    headerLogin = document.getElementById('header-login');

    //Clicando para aparecer o menu
    navMobile.addEventListener('click', function(event){
      event.preventDefault();
      //verificando se existe a class no elemento
      if( navMobile.classList.contains('nav-active') ){
        //Se existe remove ela que faz esconder o menu
        navMobile.classList.remove('nav-active');
        headerMenu.classList.remove('nav-active');        
      }else{
        //Se não existir coloca e mostra o menu
        navAccount.classList.remove('account-active');
        headerLogin.classList.remove('account-active');
        navMobile.classList.add('nav-active');
        headerMenu.classList.add('nav-active');
      }
    });
  }

}

function account(){
  //Verificando se exite o elemento
  if(document.getElementById('nav-login-mobile')){
    //Colocando o elemento de click numa variavel
    navAccount = document.getElementById('nav-login-mobile');
    headerLogin = document.getElementById('header-login');
    navMobile  = document.getElementById('nav-mobile');
    headerMenu  = document.getElementById('header-menu');

    //Clicando para aparecer o menu de login
    navAccount.addEventListener('click', function(event){
      event.preventDefault();
      //Verificando se exite a class no elemento
      if(navAccount.classList.contains('account-active')){
        //Se existe, remove ela e esconde o login
        navAccount.classList.remove('account-active');
        headerLogin.classList.remove('account-active');
      }else{
        //Se não existir coloca e mostra o login
        navMobile.classList.remove('nav-active');
        headerMenu.classList.remove('nav-active');
        navAccount.classList.add('account-active');
        headerLogin.classList.add('account-active');
      }
    });
  }
}

window.onload = function(){
  nav();
  account();
}
