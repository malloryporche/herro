Template.AddNewCard.events({
	//When form is submitted via Enter
	'submit form': function(e, tmpl) {
		
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself and declare
		var formEl = tmpl.find('form'),
			CardTitleElement = tmpl.find('[name=AddNewCard]'),
			CardTitle = CardTitleElement.value,
			timestamp = new Date,
			CardId = this._id,
			boardId = this.boardId,
			taskTitle = this.taskListTitle;
			
			debugger
		//Method call to append board id to taskListId
		Meteor.call('addNewCards', CardTitle, timestamp, CardId, boardId, boardId, taskTitle, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }

		//Clear form
		formEl.reset();

		});

}
});
