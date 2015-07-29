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
     'editValue' : function(){
    return Session.get("TargetValue" + this._id);
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
       'dbclick #spanIdOnDom' : function(e,t){
      return Session.set("TargetValue" + t.data._id,true)//hide the span and we set the input 
     },
   'click #buttonToSaveNewValue': function(e, t) { 
     //here you can take the emailId and the name based on this._id like this Collection.find({_id:this._id}).fetch(); and do the updates you want to do
     var newValueFromInput = document.getElementById('newValueFromInput').value;
       var idCurrentDocument = this._id;
       var Bebida = Collection.findOne(t.data._id);
       Collection.update({_id: idCurrentDocument}, {$set:{fieldToUpdate:   newValueFromInput}});
       return Session.set("TargetValue" + t.data._id,false); //we hide the input and we put the span again
      }
});