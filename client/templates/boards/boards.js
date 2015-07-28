Template.Boards.events({
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
    },
    'click .remove': function(){
        //when remove icon is clicked
            Meteor.call('deleteBoards', this._id, function( error, result) {
            if (error) {
                    throw new Meteor.Error(error);
            }
            });
        },

    'click .fa.fa-edit': function(){
        //when edit icon is clicked
        debugger
        sAlert.error('Your message', configOverwrite);

    }

    });


Template.Boards.helpers({
    favorite: function(){
        if ( this.favorite ) {
            return true;
        } else {
            return false;
        }
    }
});