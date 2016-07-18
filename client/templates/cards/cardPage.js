Template.CardPage.helpers({
	CardTitle: function() {
		return this.Boards.title()
	}
})

Template.CardPage.events({
	'click input#btn1': function() {
		e.preventDefault();

	}
})