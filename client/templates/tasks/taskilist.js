Template.TaskList.helpers({
	cards: function() {
		return Cards.find({taskTitle: this.taskListTitle});
		}

	});
Template.TaskList.events({
	'click .remove': function(){
		 // debugger
        //when remove icon is clicked
            Meteor.call('deleteTasklist', this._id, function( error, result) {
            if (error) {
                    throw new Meteor.Error(error);
            }
            });
        }
})