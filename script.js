function calculateMinCost() {
  //your code here
	let input = document.getElementById("rope-lengths");
	let arrayString = input.value.split(",");
	let arrayNum = arrayString.map(Number);
	let sortedArray = arrayNum.sort((a,b)=>(a-b));
	let cost = 0;
	let sum = 0;
		cost = sortedArray[0] + sortedArray[1] ;
	for (let i = 2; i <sortedArray.length; i++) {
		let num = Number(sortedArray[i]);
		cost = cost + num; 
	}
	let result = document.getElementById("result");
	result.innerHTML = cost;
	
  
  
}  
