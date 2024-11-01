$(document).ready(function () {
    $('#carouselExample').carousel({
        interval: 2000,
        ride: true,
        pause: "hover",
        wrap: true
    });

    $('.carousel-control-prev').click(function () {
        $('#carouselExample').carousel('prev');
    });
    $('.carousel-control-next').click(function () {
        $('#carouselExample').carousel('next');
    });

    $('.carousel-indicators li').click(function () {
        var target = $(this).data('target');
        $('#carouselExample').carousel($(this).data('slide-to'));
        $(this).addClass('active').siblings().removeClass('active');
    });
});