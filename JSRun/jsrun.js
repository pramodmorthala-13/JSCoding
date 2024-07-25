const arr=["a","b","c","a","b"]
const arra=[1,2]

console.log(arr.indexOf("a"))
console.log(arr.lastIndexOf("a"))



const newArray=arr.filter((v,i)=>{
  return arr.indexOf(v)==i
})

console.log(newArray)

