import _ from 'lodash'

$(function () {

  $('.customers-words .carousel').slick({
    fade: true,
    prevArrow: '<div class="slick-prev slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-arrow"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      }
    ]
  })

  $('.customers-words .carousel').on('beforeChange', function (_event, _slick, _current, next) {
    $('.customers-words .globe img').attr('src', `./images/customers/globe-${next + 1}.gif`)
  })

  // filter
  $('.filter').on('change', 'input', function(){
    const filters = $('.filter input:checked').map(function () {
      return $(this).data('filter')
    }).get()

    if (!filters.length) {
      $('[data-category]').fadeIn()
      return
    }

    $('[data-category]').each(function(){
      const category = $(this).data('category')
                              .split(',')
                              .map(c => c.trim())

      if (_.intersection(filters, category).length) {
        $(this).fadeIn()
      } else {
        $(this).fadeOut()
      }
    })
  })
})
