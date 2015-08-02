Template.Card.helpers({
	title: function() {
		return Cards.find();
	},

});
Template.Card.events({
	'click .remove': function(){
          conf = confirm("Are you sure you want to delete this card?");

          if (conf == true ) {

		 // debugger
        //when remove icon is clicked
            Meteor.call('deleteCard', this._id, function( error, result) {
            if (error) {
                    throw new Meteor.Error(error);
            }
            });
        }
    }
})