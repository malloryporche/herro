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
    
    //If TaskList Title exists, do not allow creation of duplicate titles
    var titleExists = TaskLists.findOne({'taskListTitle': value0});
   
   if (!titleExists) {

     var addNewTaskLists = TaskLists.insert({ 
        'taskListTitle' : value0,
        'timestamp' :  value1,
        'boardId' : value2
     });
     console.log("Code executed");
   return addNewTaskLists;
   } else {
    sAlert.error('You already have a tasklist with that Title.  Please enter another tasklist title.', {effect: 'jelly', position:'top-right', timeout: 'none', onRouteClose: false, stack: false, offset: '80px'});
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
    var updateFavorites = Boards.update({'_id' : value0,}, 
                                        {$set: {favorite: value1}});
        return updateFavorites;
    }

});