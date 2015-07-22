Template.Header.events({
	//When form is submitted via Enter
	'submit input.newBoard': function(e, tmpl) {
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself
		var formEl = tmpl.find('form'),
			boardTitleElement = tmpl.find('[name=addNewBoard]'),
			boardTitle = boardTitleElement.value,
			title = boardTitle,
			timestamp = new Date,
			boardId = this._id;

		//Method call to create a new Board and add it to collection
		Meteor.call('addNewBoards', title, timestamp, boardId, function( error, result) { 
             if (error) {
               throw new Meteor.Error("Problem creating New Board");

             }

		//Clear form
		formEl.reset();
		});

	}
});
