$(function () {

  $('.heading__arrow-btn, .footer__btn-up, .footer__logo').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(href).offset().top + 15
    }, {
      duration: 800,   // по умолчанию «400» 
      easing: "swing" // по умолчанию «swing» 
    });

    return false;
  });

  var mixer = mixitup('.events__event-items', {
  load: {
    filter: '.events__date-21'
  }
}); 

  $('.events__date-btn').on('click', function () {
    $('.events__date-btn').removeClass('events__date-btn--active')
    $(this).addClass('events__date-btn--active')
  })

  
  // if ($(this).attr('data-filter')) {
  //   $('.events__date-btn').removeClass('events__date-btn--active')
  //   $(`.events__date-btn[data-filter='${data}']`).addClass('events__date-btn--active')
  // }
  // else {
  //   return(false);
  // }

  $('.faq__question-link').on('click', function (e) {
    e.preventDefault()
    // $(this).toggleClass('program__acc-link--active')
    // $(this).children('.program__acc-text').slideToggle()
    if ($(this).hasClass('faq__question-link--active')) {
      $(this).removeClass('faq__question-link--active')
      $(this).children('.faq__question-text').slideUp()
    }
    else {
      $('.faq__question-link').removeClass('faq__question-link--active')
      $('.faq__question-text').slideUp()
      $(this).addClass('faq__question-link--active')
      $(this).children('.faq__question-text').slideDown()
    }
  })

});


new Splide('.splide__partners', {
  type: 'loop',
  // pagination: false,
  autoWidth: true,
  arrows: false,
  gap: '50px',
  focus: 0,
  autoScroll: {
    speed: .5,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
}).mount(window.splide.Extensions);



new Splide('.splide__about', {
  classes: {
    pagination: 'splide__pagination splide__pagination--about',
    page: 'splide__pagination__page splide__pagination__page--about',
  },
  type: 'loop',
  // autoWidth: true,
  arrows: false,
  gap: '50px',
  pagination: true,
  speed: 1000,
  perPage: 1,
  loop: false,
}).mount();

new Splide('#slider-feedback', {
  classes: {
    pagination: 'splide__pagination splide__pagination--feedback',
    page: 'splide__pagination__page splide__pagination__page--feedback',
  },
  type: 'loop',
  arrows: false,
  // width:'calc(100% + 50px)',
  // type: 'loop',
  // fixedWidth: 'calc(100% - 50px)',
  autoWidth: true,
  // gap: '30px',
  pagination: true,
  speed: 1000,
  // perPage: 1,
  // loop: true,
}).mount();




