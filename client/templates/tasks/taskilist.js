Template.TaskList.helpers({
	cards: function() {
		return Cards.find({taskTitle: this.taskListTitle});
		}

	});
Template.TaskList.events({
	'click .tasklist-remove': function(){
          conf = confirm("Are you sure you want to delete this tasklist?");

          if (conf == true ) {
             // debugger
        //when remove icon is clicked
              Meteor.call('deleteTaskList', this._id, function( error, result) {
            if (error) {
                    throw new Meteor.Error(error);
            };
            });
        }

          }
		
          
})