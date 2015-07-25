if (Meteor.isClient) {
    // code to run on server at startup
   sAlert.config({
        effect: 'jelly',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    })
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

  Template.addNewTaskLists.helpers({
    cards: function() {
    return Cards.find({ tasklistId: this._id});
  }
})
}

if (Meteor.isServer) {
  Meteor.startup(function () {


});
}

