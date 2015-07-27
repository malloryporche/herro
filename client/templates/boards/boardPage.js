Template.boardPage.helpers({
	tasklists: function() {
		return Tasklists.find();
	}
})
Template.boardPage.events({
    'click .favorites': function( e, t ){
        // code goes here
        // debugger

        var _id = this._id,
        	checked = $(e.currentTarget).is(':checked');
        // set this._id to favorites true in collection
        // debugger
        if ( checked ) {
        	Meteor.call('updateFavorites', _id, true, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	} else {
    		Meteor.call('updateFavorites', _id, false, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	}
    }
});