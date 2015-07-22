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
 deleteBoards: function (value1) {
     return  Boards.remove({ '_id': value1});
 },
 saveTaskLists: function (value0, value1, value2, value3, value4, value5, value6) {
   var newTaskLists = TaskLists.insert({ 
         '_id' : value0,
         'url' :  value1,
         'urlTitle' : value2,
         'urlDescription' : value3,
         'urlImages' : value4,
         'userTitle' :value5,
         'boards_id' : value6
     });
   return newTaskLists;
 },
 deleteTaskLists: function (value1) {
     return TaskLists.remove({ '_id': value1});
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
updateFavorites: function(value0, value1) {
    var updateFavorites = Boards.update({
        '_id' : value0,
        'favorite' : value1
    });
    return updateFavorites;
}
});