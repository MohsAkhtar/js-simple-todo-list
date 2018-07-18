var todos = [];
window.setTimeout(function() {
	

	var input = prompt("What would you to do today?");

	while(input !== "quit"){

		// code that handles input
		if(input === "list"){
			console.log(todos); // prints all todos
		} else if(input === "new"){
			// adds new todo by asking user
			var newTodo = prompt("Enter new todo:");
			// adds to array of todos
			todos.push(newTodo);
		}

		// asks again for input
		input = prompt("What would you to do today?");
	}

	console.log("Cya later!");
}, 500);