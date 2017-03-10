Template.header.helpers({
	app_name: function() {
		return orion.config.get('APP_NAME');
	}
})

Template.header.events({//@see UI/js/common/header.js
  // var paragraph = event.currentTarget; // always a P
  // var clickedElement = event.target; // could be the P or a child element
  'click .mobile-menu'(e, instance) {
    e.preventDefault();
    $(e.currentTarget).toggleClass('open');
    $(e.currentTarget).find('.dropdown-menu').slideToggle(200);
  },
  'mouseover .site-header .dropdown'(e, instance) {
    var menu = $(e.currentTarget).find('.dropdown-menu').slideDown(200);
  },
  'mouseleave .site-header .dropdown'(e, instance) {
    var menu = $(e.currentTarget).find('.dropdown-menu').hide();
  }

})
