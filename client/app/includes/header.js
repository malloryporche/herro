Template.Header.helpers({
	isSearching: function() {
		return Session.get('isSearching');
	},
   starredBoards: function() {
      return Boards.find({'favorite': true})
   },
   recentBoards: function(limit) {
      return Boards.find({}, {
         limit: limit || 5,
         sort: { timestamp: -1 },
          });
   }
})
Template.Header.events({
	
	// Activate Slide Navigation for Mobile
	'click a.button-collapse': function(e,t) {
   		$('.button-collapse').sideNav({
		     menuWidth: 300, // Default is 240
		     edge: 'left', // Choose the horizontal origin
		     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
   }
 );
   	},

   //Toggle between ACTIVE NAVBAR and Search form
   'click a.search': function() {
   		return Session.set('isSearching', true)
   },
   'click a.cancel': function() {
   		return Session.set('isSearching', false);
   },
   'click a.dropdown-button': function() {
   		$(".dropdown-button").dropdown();
   }
});
