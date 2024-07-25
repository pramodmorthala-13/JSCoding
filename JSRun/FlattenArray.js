const arr=[
  [1,2],
  [3,4],
  [5,6,[7,8],9],
  [10,11,12]
  ]
  
  const flatt=[].concat(...arr)
  console.log(flatt)
  const flatt2=arr.flat(2)
  console.log(flatt2)
  
  const custom=(arr,dep)=>{
    let result=[];
    arr.forEach(ar=>{
      if(Array.isArray(ar)&&dep>0){
        result.push(...custom(ar,dep-1))
      }else{
        result.push(ar)
      }
    })
    return result
  }
  console.log(custom(arr,2))