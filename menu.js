$(document).ready(function(){
  $('.menu-trigger').click(function(){
    $('.cards').slideToggle(500);
  });
  $(window).resize(function(){
    if( $(window).width()>500){
      $('.cards').removeAttr('style');
    }
  });
});
