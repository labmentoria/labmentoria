var headerLogin;

function nav(){

  //Verificando se existe o elemento
  if (document.getElementById('nav-mobile')) {
    //Colocando os elementos  de click em uma variavel
    navMobile  = document.getElementById('nav-mobile');
    headerMenu  = document.getElementById('header-menu');

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
        navMobile.classList.add('nav-active');
        headerMenu.classList.add('nav-active');
      }
    });
  }

}

window.onload = function(){
  nav();
}
