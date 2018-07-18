var todos = [];

var input = prompt("What would you to do today?");

if(input === "list"){
	console.log(todos); // prints all todos
} else if(input === "new"){
	// adds new todo by asking user
	var newTodo = prompt("Enter new todo:");
	// adds to array of todos
	todos.push(newTodo);
}