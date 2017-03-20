$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 50;
      if ($(window).scrollTop() > navHeight) {
        $('nav').addClass('site-navbar--fixed');
      }
      else {
        $('nav').removeClass('site-navbar--fixed');
      }
  });
});


$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
      return false;
    }
  }
});
});
