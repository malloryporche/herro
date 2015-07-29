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

//Create a new tasklist with same board Id and Title;
addNewTaskList: function (value0, value1, value2, value3) {

//If tasklist Title already exists, prompt user to input an alternate title
var titleExists = TaskLists.findOne({'taskListTitle': value0});
if (titleExists) {
        sAlert.error("error", "You already have a Tasklist with this title on this board.  Please enter a new tasklist name.")}
else {
   var addNewTaskLists = TaskLists.insert({ 
        'taskListTitle' : value0,
        'timestamp' :  value1,
        'boardId' : value2,
        'boardTitle' : value3,
     });
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

deleteCard: function (value0) {
     return Cards.remove({ '_id': value0});
 },
updateFavorites: function(value0, value1) {
    var updateFavorites = Boards.update({'_id' : value0,},
                                        {$set: {favorite: value1}});
        console.log(value0),
        console.log(value1);
    
    return updateFavorites;
}
});