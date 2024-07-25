function func1(){
  let c=0;
  return function(){
    c++;
    console.log(c)
  }
}
const func2=func1()
func2()


const fun1=(name)=>{
  return function(greeting){
    console.log(greeting +' '+name)
  }
}
const myfun=fun1('pramod')
myfun('hi')