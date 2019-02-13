function print(movie){

	var result = "You have ";

	if(movie.seen){
		result =  result+ "watched";
	}

	else{
		result = result+ "not seen"
	}

	result = result + " \"" +movie.name +"\"" +"-" +movie.rating +"stars";
	
	return result;
}

var movies = [

	{
		name: "Avengers Infinity war",
		rating: 5,
		seen: true

	},

	{
		name: "Venom",
		rating: 3,
		seen: false

	},

	{
		name: "Aquaman",
		rating: 4,
		seen:true

	},

	{
		name: "Alita",
		rating: 4.5,
		seen: false

	}


]

movies.forEach(function (movie){
	// console.log("You have " +movie.seen +" \" " +movie.name + " \" " +movie.rating);
	console.log(print(movie));

});

