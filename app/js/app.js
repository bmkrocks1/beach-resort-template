
$(function() {

    carouselHomepage();
    menuSliding();
    mediaClick();

});

function menuSliding() {
    $('.dropdown').on('show.bs.dropdown', function(e) {
        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        }
        else {
            $(this).find('.dropdown-menu').first().stop(true, true).show();
        }
    });

    $('.dropdown').on('hide.bs.dropdown', function(e) {
        if ($(window).width() > 750) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        }
        else {
            $(this).find('.dropdown-menu').first().stop(true, true).hide();
        }
    });
}

function carouselHomepage() {
    $('#beach-carousel').owlCarousel({
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        autoPlay: true,
        stopOnHover: true,
        singleItem: true,
        afterInit: '',
        lazyLoad: true
    });
}

function mediaClick() {
    $('[data-location-hash]').on('click', function(e) {
        location.hash = $(this).data('location-hash');
    });
}