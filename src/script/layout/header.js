function navMobile(){
  $('#nav-mobile').on('click', function(event) {
    event.preventDefault();
    if( $(this).hasClass('nav-active') ){
      $('#nav-mobile').removeClass('nav-active');
      $('#header-menu').removeClass('nav-active');
    }else{
      $('#nav-mobile').addClass('nav-active');
      $('#header-menu').addClass('nav-active');
    }
  });
}
$(document).ready(function($) {
 navMobile(); 
});