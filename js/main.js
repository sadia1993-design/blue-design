// external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  stagger: 30
});

$('.filter-button-group').on('click', '.button', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
    filter: filterValue
  });
});

// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function () {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});


//owl carousel js
$(document).ready(function () {



  var latestPostSlider = $('.latest_post_slider');

  latestPostSlider.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      991: {
        items: 3
      },
      1199: {
        items: 3
      }
    }
  });


  var prev = $('.latest_prev');
  prev.on('click', function () {
    latestPostSlider.trigger('prev.owl.carousel');
  });



  var next = $('.latest_next');
  next.on('click', function () {
    latestPostSlider.trigger('next.owl.carousel');
  });


//  deal_of_the_day_slider

var dealOfTheDaySlider = $('.deal_of_the_day_slider');

dealOfTheDaySlider.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 1
      },
      768: {
        items: 1
      },
      991: {
        items: 2
      },
      1199: {
        items: 2
      }
    }
  });


  var prev = $('.dotds_prev');
  prev.on('click', function () {
    dealOfTheDaySlider.trigger('prev.owl.carousel');
  });



  var next = $('.latest_next');
  next.on('click', function () {
    dealOfTheDaySlider.trigger('next.owl.carousel');
  });


});