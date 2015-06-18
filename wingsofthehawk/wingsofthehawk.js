Characters = new Mongo.Collection('characters');


if (Meteor.isClient) {
  // Character startup
  Template.startup.events({
    'click .generate': function() {
      console.log('set session to generate');
      Session.set('startup', 'generate');

    },
    'click .loadCharacter': function() {
      console.log('pushed load');
      Session.set('startup', 'loadCharacter');
    },
    'click .goHome': function() {
      console.log('pushed home');
      Session.set('startup', 'home');
    }
  });

}

if (Meteor.isServer) {


}
