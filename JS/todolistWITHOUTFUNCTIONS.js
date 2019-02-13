var todo = ["FIRST"];

var ask = prompt("WHAT DO YOU WANT TO DO?");

while(ask !== "bye"){

	if(ask === "list"){
		console.log(todo);
	}

	else if (ask === "new"){

		var newItem = prompt("Enter task");
		todo.push(newItem);
	}


	ask= promp("WHAT DO YOU WANT TO DO?");
}

console.log("TATA");