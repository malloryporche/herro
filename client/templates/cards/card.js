Template.Card.helpers({
	title: function() {
		return Cards.find();
	},

});
Template.Card.events({
	'click .remove': function(){
		 debugger
        //when remove icon is clicked
            Meteor.call('deleteCards', this._id, function( error, result) {
            if (error) {
                    throw new Meteor.Error(error);
            }
            });
        }
})