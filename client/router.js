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
FlowRouter.route('/blog', {
  name: "blog",//Help Center list!
  action: function() {
    BlazeLayout.render("docLayout", {content: "docs"});
  }
});
FlowRouter.route('/live-chat', {
  name: "livechat",//Help Center list!
  action: function() {
    BlazeLayout.render("mainLayout", {content: "livechat"});
  }
});
FlowRouter.route('/customers', {
  name: "customers",//Help Center list!
  action: function() {
    BlazeLayout.render("mainLayout", {content: "customers"});
  }
});
FlowRouter.route('/demos', {
  name: "demos",//Help Center list!
  action: function() {
    BlazeLayout.render("mainLayout", {content: "demos"});
  }
});

FlowRouter.route('/posts/:postId', {
  name: "postItem",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "postItem"});
  }
});
