/*
server.js will request from databse db.js. db.js will return values that
server.js will use
1. creates a new sqlite database.
2. then loads in the new todo model
3. exports the db object which contains the sequelize instance
and sequelize library
*/

var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/data/dev-todo-api.sqlite'
});

var db = {};

//import - loads in sequalize models from sepearte files
db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;