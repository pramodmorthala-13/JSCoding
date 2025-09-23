//implements add(2)(3)(4)(8)()
function add(first){
  return function (second){
    if(second){
      return add(first+second)
    }else{
      return first
    }
  }
}

console.log(add(1)(2)(3)(4)(5)())

const sum=(a,b)=>{
  if(a && b) return a+b;
  return function(b){
      return a+b;
  }
}


console.log(sum(8,9))
console.log(sum(8)(9))
