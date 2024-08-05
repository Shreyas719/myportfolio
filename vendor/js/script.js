// window scroll
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    }else{
        $('body').removeClass('fixed-header');
    }
});

// Document Ready
$(document).ready(function(){
    // Typing Animation
    new Typed('#type-it', {
        strings: ['Web Developer', 'Fullstack Developer'],
        typeSpeed: 100,
        loop:true
      });
});
// Owl-Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})