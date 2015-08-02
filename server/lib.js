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
     _alerts("success", "Board successfully deleted");

 },
addNewTaskList: function (value0, value1, value2) {
    
    //If TaskList Title exists, do not allow creation of duplicate titles
    var titleExists = TaskLists.findOne({'taskListTitle': value0});
   
   if (titleExists) {
        //Prevent user from inputting a duplicate tasklist title
        _alerts("error", "You already have a Tasklist with this title on this board.  Please enter a new tasklist name.");}
    else {
     var addNewTaskLists = TaskLists.insert({ 
        'taskListTitle' : value0,
        'timestamp' :  value1,
        'boardId' : value2
     });
     console.log("Code executed");
   return addNewTaskLists;
     _alerts("success", "Tasklist successfully created");
   };
},
deleteTaskList: function (value0) {
     return TaskLists.remove({ '_id': value0});
       _alerts("success", "Tasklist successfully deleted");
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
     _alerts("success", "Card successfully created");
 },

deleteCards: function (value0) {
     return Cards.remove({ '_id': value0});
       _alerts("success", "Card successfully deleted");
 },
updateFavorites: function(value0, value1) {
    var updateFavorites = Boards.update({'_id' : value0,}, 
                                        {$set: {favorite: value1}});
        return updateFavorites;
          _alerts("success", "Board successfully updated");
    }

});