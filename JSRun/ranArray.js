let min=window.prompt("enter min value")
let max=window.prompt("enter max value")
let len=window.prompt("enter length of array")

const ranArray=(min,max,len)=>{
  let arr=[]
  for(i=0;i<len;i++){
    let n=Math.floor(Math.random()*(max-min+1)+min)
    arr.push(n)
  }
  return arr

}
console.log(ranArray(min,max,len));