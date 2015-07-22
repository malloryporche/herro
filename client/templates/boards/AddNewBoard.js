Template.AddNewBoard.events({
	//When form is submitted via Enter
	'submit form': function(e, t) {
		
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself and declare
		var formEl = tmpl.find('form'),
			boardTitleElement = tmpl.find('[name=addNewBoard]'),
			boardTitle = boardTitleElement.value,
			timestamp = new Date,
			boardId = this._id;
			
		//Method call to append board id to taskListId
		Meteor.call('addNewBoards', boardTitle, timestamp, boardId, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }

		//Clear form
		formEl.reset();

		});

}
});
