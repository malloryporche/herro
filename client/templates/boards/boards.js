Template.Boards.helpers({
    favorite: function(){
        if ( this.favorite ) {
            return true;
        } else {
            return false;
        }
    },
     isEditingBoardTitle: function() {
            return Session.get('isEditingBoardTitle');
        }
});


Template.Boards.events({
    'click input.favorites': function(e,t){
        // code goes here
        // debugger

        var _id = this._id,
            currentFavoriteStatus = this.favorite,
            updatedFavoriteStatus = !this.favorite,
        	checked = $(e.currentTarget).is(':checked');

        // set this._id to the opposite of whatever favorites is stored as in collection
        if ( checked ) {
        	Meteor.call('updateFavorites', _id, updatedFavoriteStatus, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }
            });
    	} 
    },
    'click .mdi-action-delete': function(e, t){
        var board = e.currentTarget,
            conf = confirm("Are you sure you want to delete this board?");
        // debugger
        console.log(board);

        if (conf == true ) {
            sAlert.success('Board successfully deleted.')
        
        //when remove icon is clicked
            Meteor.call('deleteBoards', this._id, function( error, result) {
            if (error) {
                    throw new Meteor.Error(error);
            }
            });
        }
    },

    'click a.mdi-editor-mode-edit': function(e,t){
        //when edit icon is clicked
        // debugger
        e.preventDefault();
        Session.set('editedBoardId', this._id);
        Session.set('isEditingBoardTitle', true);
    },
    'submit form.edit-title': function(e,t){
        debugger
        Session.set('editedBoardId', null);
        Session.set('isEditingBoardTitle', false);   
        e.preventDefault();
        
        sAlert.success('Board successfully edited.');
        
        var revisedTitle = t.$('input[name="revisedTitle"]').val();
        if (revisedTitle.length) {
           Meteor.call('updateBoardTitle', this._id, revisedTitle, function(error, result) {
            if (error) {
                throw new Meteor.Error(error);
                }

            });
           }
            
    },
      
         
        // debugger
    'click a.cancel': function(e,t){
        e.preventDefault();
        Session.set('editedBoardId', null);
        Session.set('isEditingBoardTitle', false);
    }
    });
