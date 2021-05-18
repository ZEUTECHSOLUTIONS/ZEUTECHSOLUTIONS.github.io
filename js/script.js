
$(document).ready(function() {
var scrollLink = $('.scroll');
//smooth 
scrollLink.click(function(e) {
e.preventDefault();
$('body,html').animate({
scrollTop: $(this.hash).offset().top
}, 1700);
})
})



//  $(window).scroll(function(){
//  $('nav').toggleClass('scrolled', $(this).scrollTop() > 1080);
//  });


