Template.AddNewBoard.events({
	//When form is submitted via Enter
	'submit form': function(e, tmpl) {
		
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself
		var formEl = tmpl.find('form'),
			boardTitleElement = tmpl.find('[name=addNewBoard]'),
			boardTitle = boardTitleElement.value,
			title = boardTitle,
			timestamp = new Date,
			boardId = this._id;
		//Method call to append board id to taskListId
		Meteor.call('addNewBoards', title, timestamp, boardId, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }

		//Clear form
		formEl.reset();

		});

}
});
