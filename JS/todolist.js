function ques()
{
	question = prompt("What would you like to do?");

	while(question !== "quit")
	{
		if(question=="new")
		{
			var item = prompt("Add your task");
			addToList(item);
				
		}

		
		else if(question=="tasks")
		{
			listing();
			
		}

		else if(question=="delete")
		{
			deletion();
			
		}

		ques();
	}

					
}

function addToList(listitem){

	items.push(listitem); 
	console.log("ADDED NEW TODO");

}

function listing(){

	items.forEach(function (todo, i)

				{
				console.log(i + ": " + todo);
				console.log("******");
				}
				);
	
}

function deletion(){

	var index = prompt("Which number to delete");
	items.splice(index,1);
	console.log("Deleted TODO");
}




//_____________________________________________________________________________________________________________

var question;

var items = [];

ques()

alert("TATA");
