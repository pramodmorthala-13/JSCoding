const arr=[5,7,2,9,1,2,8,3,6,4]
const arr1=['a','d','n','g','t']
const arr2=arr.concat(arr1)
const sortArray=(arr)=>{
  for (let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      let temp=arr[i]
      arr[i]=arr[i+1]
      arr[i+1]=temp
        i=-1
    }
  }
  return arr
}
console.log(sortArray(arr2))


x=10;
if(x>1){
   x=x+1;
  console.log(x)
}
var x;