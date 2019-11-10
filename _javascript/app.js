$(document).ready(function() {
  // Home Header
  $(window).on('scroll', function() {
    var distance = $(window).scrollTop();
    if (distance >= 80) {
      $('.header').addClass('scrollingHeader');
    } else {
      $('.header').removeClass('scrollingHeader');
    }
  });

  // Smooth Scroll
  smoothScroll.init();

  // Wow.js
  $('.container-triple li:nth-child(3n + 1)').each(function() {
    $(this).find('a').attr('data-wow-delay', '0.1s');
  });
  $('.container-triple li:nth-child(3n + 2)').each(function() {
    $(this).find('a').attr('data-wow-delay', '0.2s');
  });
  $('.container-triple li:nth-child(3n)').each(function() {
    $(this).find('a').attr('data-wow-delay', '0.3s');
  });
  
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated', 
    offset: 0,        
    mobile: true,      
    live: true 
  });
  wow.init();

  // Owl Carousel
  $('.portfolio-carousel').owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    navText: ['', ''],
    autoPlay: true,
    smartSpeed: 450,
    animateOut: 'fadeOut'
  });

  // Spanizer
  $('.section-header').each(function() {
    var arr = $(this).html().split('');
    var newArr = [];
    arr.forEach(function(letter) {
      if (letter !== ' ') {
        newArr.push('<span class="wow fadeInUp">' + letter + '</span>');
      } else {
        newArr.push('<span class="wow fadeInUp">&nbsp;</span>');
      }
    });
    newArr = newArr.join('');
    $(this).html(newArr);
  });
});
