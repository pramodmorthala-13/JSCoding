const str="pramod";

const reverseStr=(str)=>{
    if(str==="") {
        return "";
    } else {
        return reverseStr(str.substr(1))+str.charAt(0);
    }
}

console.log("reverse a string using with function",reverseStr(str))





//without function
var revStr=""
for(let i=str.length-1;i>=0;i--){
    revStr+=str[i]
}
console.log("reverse a string with loop",revStr)



//within built functions

const strRev=str.split(''). reverse().join('');
console.log("with builin functions",strRev)