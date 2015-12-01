
Template.registerHelper('isSearching', function() {
		return Session.get('isSearching');
	});
Template.registerHelper('starredBoards', function() {
      return Boards.find({'favorite': true})
   });
Template.registerHelper('recentBoards', function(limit) {
      return Boards.find({}, {
         limit: limit || 5,
         sort: { timestamp: -1 },
          });
   });
Template.registerHelper('isCreatingBoard', function(){
		return Session.get('isCreatingBoard')
	});
Template.registerHelper('tasklists', function() {
		return Tasklists.find();
	});
Template.registerHelper('favorite', function(){
        if ( this.favorite ) {
            return true;
        } else {
            return false;
        }
    });

Template.registerHelper('isEditingBoardTitle', function() {
    return Session.get('isEditingBoardTitle')
  });

