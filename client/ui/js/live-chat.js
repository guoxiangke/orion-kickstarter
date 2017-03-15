$(function(){
  //  手机pc切换
  $('.welcome-items .control-btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).hasClass('pc')) {
      $('.welcome .item-mobile').hide().siblings('.item-pc').fadeIn(300)
    } else if ($(this).hasClass('mobile')) {
      $('.welcome .item-pc').hide().siblings('.item-mobile').fadeIn(300)
    }
  })

  $('.collaborate .control-btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).hasClass('pc')) {
      $('.collaborate .item-mobile').hide().siblings('.col-pc').fadeIn(300)
    } else if ($(this).hasClass('mobile')) {
      $('.collaborate .col-pc').hide().siblings('.item-mobile').fadeIn(300)
    }
  })

  $('.slick-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    speed: 1000,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          arrows: false
        } 
      },
      {
        breakpoint: 767,
        settings: {
          adaptiveHeight: true
        }
      }
    ]
  })

  $('.slick-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).siblings('.tabs').find('.tab').eq(nextSlide).addClass('current-tab').siblings().removeClass('current-tab');
  })

  $('.tabs').each(function(){

    var $that = $(this)

    $that.find('.tab').each(function(index){

      $(this).click(function(){
        $(this).addClass('current-tab').siblings().removeClass('current-tab');
        $that.siblings('.slick-for').slick('slickGoTo', index);
      })

    })
  })

// 视频自动播放
  $('.video').each(function(){
    const $window = $(window)
    const videoEle = this
    const $video = $(this)

    const handleScroll = function () {
      if ($video.offset().top + $video.height() < $window.scrollTop() + $window.height()) {
        if ($video.is(':visible') && !$video.hasClass('has-played')) {
          videoEle.play()
          $window.unbind('scroll', handleScroll)
        }
      }
    }

    $window.bind('scroll', handleScroll)
  })

  // banner video
  const bannerVideo = $('.banner video').get(0)
  const $videoMask = $('.banner-video')
  const $closeBtn = $('.banner .close-btn')
  
  $('.banner .video-btn').click(function(){
    $videoMask.fadeIn()
    bannerVideo.play()
  })

  // close banner video
  $closeBtn.click(function(){
    if (!bannerVideo.ended) {
      bannerVideo.pause()
      bannerVideo.currentTime = 0
    }
    $videoMask.fadeOut()
  })
})