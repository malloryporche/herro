Meteor.publish('boards', function() {
    return Boards.find({});
});
Meteor.publish('tasklists', function() {
    return TaskLists.find({});
});
Meteor.publish('cards', function() {
    return Cards.find({});
});