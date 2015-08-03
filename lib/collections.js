Boards = new Mongo.Collection('boards');
Boards.allow({
	insert: function(userId, doc) {
		//the user must be logged in, and the document must be owned by the user
		return (userId && doc.owner === userId);
	},
	update: function(userId, doc, fields, modifier) {
		//can only change your own documents
		return doc.owner === userId;
	},
	remove: function(userId, doc) {
		///can only remove your own documents
		return doc.owner === userId;
	},
	fetch: ['ownerId']
});


TaskLists = new Mongo.Collection('tasklists');
TaskLists.allow({
	insert: function(userId, doc) {
		//the user must be logged in, and the document must be owned by the user
		return (userId && doc.owner === userId);
	},
	update: function(userId, doc, fields, modifier) {
		//can only change your own documents
		return doc.owner === userId;
	},
	remove: function(userId, doc) {
		///can only remove your own documents
		return doc.owner === userId;
	},
	fetch: ['ownerId']
});


Cards = new Mongo.Collection('cards');
Cards.allow({
	insert: function(userId, doc) {
		//the user must be logged in, and the document must be owned by the user
		return (userId && doc.owner === userId);
	},
	update: function(userId, doc, fields, modifier) {
		//can only change your own documents
		return doc.owner === userId;
	},
	remove: function(userId, doc) {
		///can only remove your own documents
		return doc.owner === userId;
	},
	fetch: ['ownerId']
});