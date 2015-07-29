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
    },
    isEditingBoardTitle: function() {
    return Session.get('isEditingBoardTitle')
  }
  
})


Template.boardPage.events({
    'click .favorites': function( e, t ){
        // code goes here
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
    'click a.board-title.editable': function(e,t) {

      debugger
      e.preventDefault();
      Session.set('editedBoardId', this._id);
      Session.set('isEditingBoardTitle', true);
      
      var revisedTitle = t.$('input[name="revisedTitle"]').val();
    },
    'submit form.edit-title': function(e,t){
        debugger
        e.preventDefault();

        var revisedTitle = t.$('input[name="revisedTitle"]').val();
        if (revisedTitle.length) {
           Meteor.call('updateBoardTitle', this._id, revisedTitle, function(error, result) {
            if (error) {
                throw new Meteor.Error(error)
            }
           });
            Session.set('editedBoardId', null); 
            Session.set('isEditingBoardTitle', false);   
        }
        // debugger
    },
    'click a.cancel': function(e,t){
        e.preventDefault();
        Session.set('editedBoardId', null);
    }
});