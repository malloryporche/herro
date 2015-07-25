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
			boardId = this._id;

		//Call Add new task list method on the server
		Meteor.call('addNewTaskList', taskListTitle, timestamp, boardId, function( error, result) { 
             if (error) {
               throw new Meteor.Error(error);
             }

		//Clear form
		formElement.reset();

	});
	
}});
