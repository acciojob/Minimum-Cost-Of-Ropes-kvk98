// function calculateMinCost() {
//   //your code here
// 	let input = document.getElementById("rope-lengths");
	
// 	let arrayString = input.value.split(",");
// 	let arrayNum = arrayString.map(Number);
// 	let sortedArray = arrayNum.sort((a,b)=>(a-b));
// 	let cost = 0;
// 	let sum = 0;
// 		// cost = sortedArray[0] + sortedArray[1] ;
// 	for (let i = 0; i <sortedArray.length; i++) {
// 		sum += Number(sortedArray[i]);
// 		cost += sum; 
// 	}
// 	let result = document.getElementById("result");
// 	result.innerHTML = cost;
	
  
  
// }  

// function calculateMinCost() {
//   // Get the input element and its value
// 	let form = document.getElementById("form");
//   let input = document.getElementById("rope-lengths");
//   let arrayString = input.value.split(", ");
  
//   // Convert the input string into an array of numbers
//   let arrayNum = arrayString.map(Number);

//   // Initialize the cost
//   let cost = 0;

//   // While there are at least two ropes
//   while (arrayNum.length >= 2) {
//     // Sort the array in ascending order
//     arrayNum.sort((a, b) => a - b);

//     // Take the two shortest ropes
//     const min1 = arrayNum.shift();
//     const min2 = arrayNum.shift();

//     // Calculate the cost of connecting these two ropes
//     const connectionCost = min1 + min2;

//     // Add the connection cost to the total cost
//     cost += connectionCost;

//     // Insert the new rope length back into the array
//     arrayNum.push(connectionCost);
//   }

//   // Display the result
//   let result = document.getElementById("result");
//   result.innerHTML = cost;
// }



let input = document.querySelector("input");
let result = document.querySelector("#result");
function calculateMinCost() {
	let inputArray = input.value.split(", ");
	
	let sum=0, cost=0;

	while (inputArray.length>0) {
		inputArray.sort((a,b)=> {
			return a-b;
		})
		if (inputArray.length === 1) {
			sum = inputArray[0];
			inputArray.shift();
			cost += sum;
			return cost;
		}
		else {
			sum = inputArray[0] + inputArray[1];
			inputArray.shift();
			inputArray.shift();
			inputArray.unshift(sum);
			cost = cost + sum;
		}
	}

	result.innerHTML = cost;
	// return 
}
