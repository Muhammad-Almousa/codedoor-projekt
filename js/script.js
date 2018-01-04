$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});

$("#moveUp").click(function() {
    $('html, body').animate({
        scrollTop: $("#header-nav").offset().top
    }, 2500);
});