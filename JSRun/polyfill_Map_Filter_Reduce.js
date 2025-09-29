// Polyfill for Map

Array.prototype.myMap= function(cb){
  if(typeof cb != "function"){
    throw new TypeError(cb + " is not a function")
  }
  let result =[];
  for(let i=0;i<this.length; i++){
    result.push(cb(this[i], i, this));
  }
  return result;
}

let arr1=[1,2,3];

const res = arr1.myMap((a,i)=>a+1)
console.log(res)
