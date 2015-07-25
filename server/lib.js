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
addNewTaskList: function (value0, value1, value2) {
    var titleExists = TaskLists.findOne({'taskListTitle': value0});
debugger
   if (!titleExists) {

    

     var addNewTaskLists = TaskLists.insert({ 
        'taskListTitle' : value0,
        'timestamp' :  value1,
        'boardId' : value2
     });
     console.log("Code executed");
   return addNewTaskLists;
   } 
 },
deleteTaskList: function (value0) {
     return TaskLists.remove({ '_id': value0});
 },
addNewCards: function(value0, value1, value2, value3, value4, value5) {
   var addNewCard = Cards.insert({ 
         'CardTitle' : value0,
         'timestamp' :  value1,
         'CardId' : value2,
         'boardTitle' : value3,
         'boardId' : value4,
         'taskTitle' : value5
     });
   return addNewCard;
 },

deleteCards: function (value0) {
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