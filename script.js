var todos = [];

// This setTimeout gives the HTML a half second to load before running the JS
window.setTimeout(function() {
	

	var input = prompt("What would you to do today?");

	while(input !== "quit"){

		// code that handles input
		if(input === "list"){
			listTodos();
		} else if(input === "new"){
			addTodo();
		} else if(input === "delete"){
			deleteTodo();
		}

		// asks again for input
		input = prompt("What would you to do today?");
	}

	console.log("Cya later!");

	function listTodos(){
		console.log("**********");
			todos.forEach(function(todo, i){
				console.log(i + ": " + todo); // prints all todos
			});
			console.log("**********");
	}

	function addTodo(){
		// adds new todo by asking user
			var newTodo = prompt("Enter new todo:");
			console.log("Added a todo");
			// adds to array of todos
			todos.push(newTodo);
	}

	function deleteTodo(){
		// ask for index of todo to be deleted
			var index = prompt("Enter index of to do to delete");
			// delete that todo
			todos.splice(index,1);
			console.log("Deleted todo");
	}

}, 500);