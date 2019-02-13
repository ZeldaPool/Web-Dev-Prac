function isEven(num){
	if(num%2 == 0){
		// console.log("True");
		return true;
	}
	else{
		return false;
	}
}

function factorial(num){
	var i;
	for(i=num-1; i>0; i--)
	{
		num = num * i;
		
	}
	console.log(num);
	return num;

}

function kts(str){
	var newStr = str.replace(/-/g , "_");
	return newStr;
}

// isEven(4)

console.log("--------");

// factorial(5)

