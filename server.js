var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'walk the dog',
	completed: false
}, {
	id: 2,
	description: 'walk the cat',
	completed: false
}];
app.get('/', function (req, res) {
	res.send('Todo API started');
});

app.get('/todos', function (res, res) {
	res.json(todos);
});

app.listen(PORT, function () {
	console.log('server started at port: ' + PORT);
});