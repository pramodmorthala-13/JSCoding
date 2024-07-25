const arr=[1,2,4,6,9]

let missingArray=[];

//short hand
	
	let minNum=Math.min(...arr);
	let maxNum=Math.max(...arr);
	
	for(let i=minNum; i<maxNum; i++){
		if(arr.indexOf(i)<0){
			missingArray.push(i);
		}
		}
console.log("short hand",missingArray);



//long method
const missing=(arr)=>{
	let missingArray=[];
	
	let minNum=Math.min(...arr);
	let maxNum=Math.max(...arr);
	
	for(let i=minNum; i<maxNum; i++){
		if(arr.indexOf(i)<0){
			missingArray.push(i);
		}
	}
	return missingArray;
}

console.log("with function calling",missing(arr))
