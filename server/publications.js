Meteor.publish('boards', function() {

	// debug hack to add to your publish for delay...use for checking spinners
           Meteor._sleepForMs(2000);
    
    return Boards.find({ownerId: this.userId});
});
Meteor.publish('tasklists', function() {
         
    
    return TaskLists.find({ownerId: this.userId});
});
Meteor.publish('cards', function() {
        
    return Cards.find({ownerId: this.userId});
});