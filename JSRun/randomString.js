const ran=Math.random().toString(36).slice(2)
console.log(ran)

const rana=Math.random().toString(36)
console.log(rana,rana.substr(2,7))


//with loop

let len=window.prompt("enter lenth of string")
const ranStr=(len)=>{
  let str=""
  let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  for(i=0;i<len;i++){
    let index=Math.floor(Math.random()*char.length)
    str+=char[index]
  }
  return str
}
console.log("random string with loop",ranStr(len))
