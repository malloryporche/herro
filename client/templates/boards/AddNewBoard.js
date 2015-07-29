Template.AddNewBoard.helpers({
	isAddingNewBoard: function(){
		return Session.get('isCreatingBoard')
	}
});


Template.AddNewBoard.events({
	'click a.create-board': function(e,t){
		e.preventDefault();
		Session.set('isCreatingBoard', true);
	},
	//When form is submitted via Enter
	'submit form.add-board': function(e, t) {
		
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself and declare
		var boardTitle = t.$('input[name=addNewBoard]').val();
			timestamp = new Date,
			boardId = this._id,
			formElement = t.find('form');

			debugger
		//Method call to append board id to taskListId
		Meteor.call('addNewBoards', boardTitle, timestamp, boardId, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }

		//Clear form
		formElement.reset();

		});

}
});
