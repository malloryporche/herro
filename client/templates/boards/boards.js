Template.Boards.helpers({
    favorite: function(){
        if ( this.favorite ) {
            return true;
        } else {
            return false;
        };
    }
});


Template.Boards.events({
    'click .favorites': function( e, t ){
        // code goes here
        // debugger

        var _id = this._id,
            currentFavoriteStatus = this.favorite,
            updatedFavoriteStatus = !this.favorite,
        	checked = $(e.currentTarget).is(':checked');
        // set this._id to the opposite of whatever favorites is stored as in collection
        debugger
        if ( checked ) {
        	Meteor.call('updateFavorites', _id, updatedFavoriteStatus, function( error, result) { 
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