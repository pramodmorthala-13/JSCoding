const data={
	prem:6,pramod:7,nani:9
};
let a=0

Object.keys(data).forEach(key=>{
	a+=data[key]
})

console.log(a+0)