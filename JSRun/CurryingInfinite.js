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

