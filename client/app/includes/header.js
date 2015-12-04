Template.Header.helpers({

});

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
   'click i.mdi-action-search': function() {
   		return Session.set('isSearching', true)
   },
   'click i.mdi-content-clear': function() {
         return Session.set('isSearching', false)
   },
   'click i.mdi-content-add': function() {
   		$(".dropdown-button").dropdown();
   },
   'click a.create-board': function() {

   		return Session.set('isCreatingBoard', true);
   }
});
