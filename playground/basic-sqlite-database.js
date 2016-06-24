/*
Sequelize will let us access our data as javascript objects and arrays.
*/

var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-sqlite-databse.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
});
sequelize.sync().then(function() {
	console.log('Everything is synced');

	Todo.create({
		description: 'walk the cat',
		completed: true
	}).then(function(todo) {
		console.log('Finished');
		console.log(todo);
	}).catch(function (e) {
		console.log(e);
	});
})