Template.boardPage.helpers({
	tasklists: function() {
		return Tasklists.find();
	},
	favorite: function(){
        if ( this.favorite ) {
            return true;
        } else {
            return false;
        }
    }
})
Template.boardPage.events({
    'click .favorites': function( e, t ){
        // code goes here
        debugger

        var _id = this._id,
        	checked = $(e.currentTarget).is(':checked');
        // set this._id to the opposite of whatever favorites is stored as in collection
        // debugger
        if ( checked ) {
        	Meteor.call('updateFavorites', _id, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	}
    }
});