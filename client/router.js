FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});
FlowRouter.route('/docs', {
  name: "docs",//Help Center list!
  action: function() {
    BlazeLayout.render("docLayout", {content: "docs"});
  }
});

FlowRouter.route('/posts/:postId', {
  name: "postItem",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "postItem"});
  }
});
