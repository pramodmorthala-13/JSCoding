const numInRange=(min,max)=>{
  return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(numInRange(15,50))