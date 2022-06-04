/* Given arrival and departure times of trains, calculate 
the number of platforms required for a train station.  
Problem Statement Implement a function that returns the 
minimum number of platforms that are required for the 
train so that none of them waits. 
Example: Input:  arrival= [900, 940, 950, 1100, 1500, 1800] 
departure = [910, 1200, 1120, 1130, 1900, 2000]  
Output:  result = 3  
Note: A train will wait if the arrival time of one train 
overlaps with the arrival time of the other. So, the problem 
is to find the minimum number of platforms, so that if the 
trains have an overlapping arrival time, they do not collide. */
<script>
//Program to find minimum number of platforms
// required on a railway station

function max(a,b)
{
	if(a==b)
		return a;
	else{
		if(a>b)
			return a;
		else
			return b;
	}
}

// Returns minimum number of platforms required
function findPlatform( arr, dep, n)
{

	// plat_needed indicates number of platforms
	// needed at a time
	var plat_needed = 1, result = 1;
	var i = 1, j = 0;

	// run a nested loop to find overlap
	for (var i = 0; i < n; i++) {
		// minimum platform
		plat_needed = 1;

		for (var j = i + 1; j < n; j++) {
			// check for overlap
			if (max(arr[i], arr[j]) <= min(dep[i], dep[j]))
				plat_needed++;
		}

		// update result
		result = max(result, plat_needed);
	}

	return result;
}

var arr = [ 900, 940, 950, 1100, 1500, 1800 ];
	var dep = [ 910, 1200, 1120, 1130, 1900, 2000 ];
	var n =6;
	document.write("Minimum Number of Platforms Required = "
		+findPlatform(arr, dep, n));


</script>
