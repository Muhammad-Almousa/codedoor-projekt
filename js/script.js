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

$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});
