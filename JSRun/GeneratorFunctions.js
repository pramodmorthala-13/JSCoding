function* mygen(){
  yield 1;
  yield 2;
  yield 3;
}
const genObj=mygen();
console.log("my gen",genObj.next())
console.log(genObj.next())
console.log("with return function gen exit",genObj.return())
console.log(genObj.next())

function* genId(){
  let id=1;
  while(true){
   yield id++
  }
}
const idgenObj=genId()
console.log("id gen ",idgenObj.next())


function* idgen(){
  let id=1;
  while(true){
    const increament = yield id
    if(increament!=null){
      id+=increament
    }else{
      id++
    }
  }
}
const idObj=idgen()
console.log(idObj.next())
console.log("id gen with passing argument in next()",idObj.next(15))

function* genArr(arr){
  for(let i=0; i<arr.length;i++){
   yield arr[i]
  }
}
const arrObj=genArr([9,7,5])
console.log(arrObj.next())