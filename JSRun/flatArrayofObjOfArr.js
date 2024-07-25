const arr=[
  {
    a:[1,2,3]
  },
  {
    a:[1,2,3]
  }
  ]
  
  //[1,2,3,1,2,]
  
const flatArr=[]
for(let i=0; i<arr.length;i++){
  for(let j=0;j<arr[i].a.length;j++){
    flatAr.push(arr[i].a[j])
  }
}
console.log(flatArr)