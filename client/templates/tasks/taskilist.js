Template.TaskList.helpers({
	cards: function() {
		return Cards.find({taskTitle: this.taskListTitle});
		}

	});