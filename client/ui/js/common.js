$('.site-header .dropdown').each(function() {
  const $dropdown = $(this)
  const $menu = $dropdown.find('.dropdown-menu')

  $dropdown.hover(
    function () {
      $menu.slideDown(200)
    },
    function () {
      $menu.hide()
    }
  )
})

$('.mobile-menu').click(function(){
  $(this).toggleClass('open')
  $(this).find('.dropdown-menu').slideToggle(200)
});

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('form.get-started').submit(function(){
  let $email = $(this).find('.email');
  if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($email.val())) {
    $(this).animateCss('shake')
    $email.addClass('error')
    return false
  } else {
    $email.removeClass('error')
    return true
  }
});

