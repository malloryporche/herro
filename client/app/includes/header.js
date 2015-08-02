Template.AddNewBoard.events({
	//When form is submitted via Enter
	'submit input.newBoard': function(e, t) {
		 	//Prevent default submission of form
			e.preventDefault();

		//Get access to form itself
		var formEl = t.find('form'),
			boardTitleElement = t.find('[name=addNewBoard]'),
			boardTitle = boardTitleElement.value,
			title = boardTitle,
			timestamp = new Date,
			boardId = this._id;

		//Method call to create a new Board and add it to collection
		Meteor.call('addNewBoards', title, timestamp, boardId, function( error, result) { 
             if (error) {
               throw new Meteor.Error("Problem creating new board");

             }

		//Clear form
		formEl.reset();
		});

	},

	'click a.button-collapse':  function(){
   $(".button-collapse").sideNav();	}
});
