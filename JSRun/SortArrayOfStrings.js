const arr=["pramod","anni","ziya","reshu"]
const arra=["pramod","anni","ziya","reshu"]
arr.sort((a,b)=>{
  if(a>b) return 1;
  if(a<b) return -1;
  return 0
})
console.log(arr)

arra.sort((a,b)=>a<b?-1:1)
console.log(arra)