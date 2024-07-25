const fun1=(cbf)=>{
  console.log("im actual function")
  cbf();
}
const fun2=()=>{
  console.log("im callback function")
}
fun1(fun2);

//we can send arguments with callback function
const fun3=(x,cbf)=>{
  console.log("im actual function")
  console.log("im a argument",x)
  cbf();
}
const fun4=()=>{
  console.log("im callback function")
}
fun3('hello',fun4);
