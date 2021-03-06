Telescope.menus.register("adminMenu", {
  route: 'feeds',
  label: 'Feeds',
  description: 'import_new_posts_from_feeds'
});

Meteor.startup(function () {

  Router.onBeforeAction(Router._filters.isAdmin, {only: ['feeds']});

  // RSS Urls Admin

  Router.route('/feeds', {
    name: 'feeds',
    controller: Telescope.controllers.admin,
    waitOn: function() {
      return [
        Meteor.subscribe('feeds'),
        Meteor.subscribe('allUsersAdmin'),
        Meteor.subscribe('categories')
      ];
    },
    // template: 'feeds'
  });

});
