const arr=[1,2,3,2,1]
let myarr=[...new Set(arr)]
console.log("example 1: removed duplicates",myarr)


const arr1=[1,2,2,3,4,4]
const duplicates = arr1.filter((e, index) =>
	 arr1.indexOf(e) == arr1.lastIndexOf(e))
console.log("example 2 : unique (dont have duplicate) ",duplicates)
