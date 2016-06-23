var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

//todos array to hold all the todo items
var todos = [];
var todoIDNext = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API started');
});

//GET /todos
app.get('/todos', function (res, res) {
	res.json(todos);
});

//GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoID = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if(todo.id === todoID) {
			matchedTodo = todo;
		}
	});

	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send("No Entry found");
	}
});

//POST /todos
/* 
For post, we need to download another module called body-parser which
takes any json request that comes in, express will parse it and we will be
able to access it within the req.body parameter.
*/
app.post('/todos', function (req, res) {
	var body = req.body;
	body.id = todoIDNext++;

	todos.push(body);
	
	res.json(body);
});

app.listen(PORT, function () {
	console.log('server started at port: ' + PORT);
});