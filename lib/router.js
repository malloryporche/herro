Router.configure({
	layoutTemplate: 'layout',
})


Router.route('/', {name: 'boardsList'});

Router.route('boards/:_id', {
	name: 'boardPage',
	data: function() { return Boards.findOne(this.params._id); }
});

Router.route('tasks/:_id', {
	name: 'TaskList',
	data: function() { return TaskLists.findOne(this.params._id); }
});

Router.route('card/:_id', {
	name: 'Card',
	data: function() { return Cards.findOne(this.params._id); }
});