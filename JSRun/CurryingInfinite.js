//implements add(2)(3)(4)(8)()
function add(a){
  return function (b){
    if(b){
      return add(a+b)
    }else{
      return a
    }
  }
}

console.log(add(1)(2)(3)(4)(5)())

