// the digital root of 9 is 9.
// the digital root of 15 is 1 + 5 = 6
// the digital root of 159 = 1 + 5 + 9 = 15 = 1 + 5 = 6
// the digital root of 2155 = 2 + 1 + 5 + 5 = 13 = 1 + 3 = 4
function digitalRoot(n)
{
	//Set up the trivial case, which lets you out of the game
	// When there's one digit in the sum
	var sum = 0;
	if (n <= 9) return n;
	// Set up other cases 
	var nString = n.toString();
	for (var i=0; i<=nString.length; i++)
	{
		sum= sum+parseInt(nString[i]);
	}

	return digitalRoot(sum);
}