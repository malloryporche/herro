Meteor.methods({
 addNewBoards: function (value0, value1, value2) {
   var addNewBoards = Boards.insert({ 
        'boardTitle': value0, 
        'timestamp': value1, 
        'boardId': value2, 
        'favorite': false 
    });
   return addNewBoards;
 },
 deleteBoards: function (value0) {
     return  Boards.remove({ '_id': value0});
 },
 addNewTaskLists: function (value0, value1, value2) {
   var addNewTaskLists = TaskLists.insert({ 
        'taskListTitle' : value0,
        'timestamp' :  value1,
        'boardId' : value2
     });
   return addNewTaskLists;
 },
 deleteTaskLists: function (value0) {
     return TaskLists.remove({ '_id': value0});
 },
 addNewCard: function(value0, value1, value2, value3, value4, value5, value6) {
   var addNewCard = Cards.insert({ 
         '_id' : value0,
         'title' :  value1,
         'timestamp' : value2,
         'boardId' : value3,
         'urlImages' : value4,
         'tasklistId' :value5,
         'boardTitle' : value6
     });
   return addNewCard;
 },

 deleteCard: function (value0) {
     return Cards.remove({ '_id': value0});
 },
updateFavorites: function(value0, value1) {
    var updateFavorites = Boards.update({
        '_id' : value0,
        'favorite' : value1
    });
    return updateFavorites;
}
});