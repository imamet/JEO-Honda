$(document).ready(function() {

    // fix header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 110) {
            $("header").addClass("fixed-position");
        } else {
            $('header').removeClass('fixed-position');
        }
    });

  

    // modal cirebon

    $(".right__click").click(function() {
        $(".frameModal").fadeIn(300);
    });

    $(".close-iframe").click(function() {
        $(".frameModal").fadeOut(300);
    });

    // modal pekalongan
    $(".right__click1").click(function() {
        $(".frameModal1").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal1").fadeOut(300);
    });

    // modal lasem
    $(".right__click2").click(function() {
        $(".frameModal2").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal2").fadeOut(300);
    });

    // modal solo
    $(".right__click3").click(function() {
        $(".frameModal3").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal3").fadeOut(300);
    });

    // modal yogyakarta
    $(".right__click4").click(function() {
        $(".frameModal4").fadeIn(300);
    });

    $(".modal__close").click(function() {
        $(".frameModal4").fadeOut(300);
    });


 // Scroll Reveal
 window.sr = ScrollReveal();
 sr.reveal('.lazyloaded',{ 
   duration: 500,
   delay: 100 
 });
 sr.reveal('.lazyloaded1',{ 
   duration: 1000,
   delay: 500 
 });
 sr.reveal('.lazyloaded2',{ 
   duration: 1000,
   delay: 500 
 });



});