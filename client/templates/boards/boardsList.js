Template.BoardsList.helpers({
	starredBoards: function() {
		return Boards.find({favorite: true});
	}
})