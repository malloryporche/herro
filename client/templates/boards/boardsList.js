Template.BoardsList.helpers({
	starredBoards: function() {
		return Boards.find({favorite: true});
	},
	recentBoards: function(limit) {
		return Boards.find({}, {
			limit: limit || 5,
			sort: { timestamp: -1 },
			 });
	}
})