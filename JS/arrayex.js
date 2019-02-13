function printReverse(items)
{
	for(i=items.length; i>=0; i--)
	{
		console.log(items[i]);
	}
}


function isUniform(uni)
{
	var j= uni[0];

	for(i=1; i<uni.length; i++)
	{
		if(j !== uni[i])
		{
			console.log(uni[i]);
			console.log("False");	
			return false;
		}

			
	}
	console.log("True");
	
	
}

function sumArray(sum)
{
	var ans=0;
	for(i=0; i<sum.length;i++)
	{
		ans = ans + sum[i];
	}

	console.log(ans);
}

function max(maxm)
{
	k= maxm[0];
	for(i=1; i<maxm.length;i++)
	{
		if(k < maxm[i])
		{
			k = maxm[i];
		}
	}

	console.log(k);
}


var item = [1,2,3,4, "kaka", "haha", "lala", "jaja"];

printReverse(item);

var unif = [2,3,2];

isUniform(unif);

var sums = [10,20,10];

sumArray(sums);

var maxs = [500, 123, 3120, 15, 100];

max(maxs);