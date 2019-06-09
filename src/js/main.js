// Tabs switch at advantages block
$('.sub-menu ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-wrapper').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
})

//
$(document).ready(function(){
  $('.owl-carousel.carousel-services').owlCarousel({
    dots: true,
    items: 3,
    center: true,
    loop: true,
    margin: 20,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    pagination : true,
  });
});

//
$(document).ready(function(){
  $('.owl-carousel.carousel-reviews').owlCarousel({
    dots: true,
    items: 3,
    center: true,
    loop: true,
    margin: 20,
    lazyLoad: true,
    autoplay: true,
    nav: false,
    pagination : true,
  });
});