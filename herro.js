if (Meteor.isClient) {
  Meteor.subscribe('tasklists');  

  Meteor.subscribe('boards');

  Meteor.subscribe('cards');


  Template.BoardsList.helpers({ 
  boards: function() {
    return Boards.find()
    }
  });

  Template.boardPage.helpers({
    tasklists: function() {
      return TaskLists.find({ boardId: this._id});
    }
  });

  Template.AddNewTaskList.helpers({
    cards: function() {
    return Cards.find({ tasklistId: this._id});
  }
})
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

