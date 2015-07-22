Template.Boards.events({
    'click .favorites': function( e, t ){
        // code goes here
        // debugger

        var _id = this._id,
        	checked = $(e.currentTarget).is(':checked');
        // set this._id to favorites true in collection
        debugger
        if ( checked ) {
        	Meteor.call('updateFavorites', _id, true, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	} else {
            var unFavorited = false;
    		Meteor.call('updateFavorites', _id, false, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	}
    }
});


// Template.Board.helpers({
//   _myName: function () {
//     return "Dennis";
//   }
// });