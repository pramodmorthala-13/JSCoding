const name = "pramod"

const reverseStr=(str)=>{
let res;
const length=str.length;
for(let i=0; i<length;i++){
    res1 = str.slice(length-i) 
    res = str.slice(0,length-i)
    console.log(res1+res)
}
}

reverseStr(name)