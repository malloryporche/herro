Template.addNewTaskLists.events({
	//When form is submitted
	'submit form': function(e, tmpl) {
		
		//Prevent default submission of form
		e.preventDefault();

		//Get access to form itself and define variables
		var formElement = tmpl.find('form'),
			taskListTitleElement = tmpl.find('[name=newList]'),
			taskListTitle = taskListTitleElement.value,
			timestamp =  new Date,
			boardId = this._id,
			boardTitle = this.boardTitle;
			debugger

		
		//Call Add new task list method on the server
		Meteor.call('addNewTaskList', taskListTitle, timestamp, boardId, boardTitle, function( error, result) { 
             if (error) {
              _alerts("error", "You already have a Tasklist with this title on this board.  Please enter a new tasklist name.  Thank you.");
             }

		//Clear form
		formElement.reset();

	});
	 
}});
