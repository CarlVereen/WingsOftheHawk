// Creation of collections for sheet data
Characters = new Mongo.Collection('characters');

// routing for template changes using iron routing
Router.route('/', function(){
  this.render('startup');
})

if (Meteor.isClient) {
  // Character startup
  Template.startup.events({
    'click .generate': function() {
      Router.go('generate');

    },
    'click .loadCharacter': function() {

    },
    'click .goHome': function() {

    }
  });

}

if (Meteor.isServer) {


}
