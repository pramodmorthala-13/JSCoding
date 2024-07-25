let n =window.prompt("enter no of lines")
let str=""
for (let i=1; i<=n; i++ ) {
  for(let j=n; j>=i; j--){
    str+="*"
  }
  str+="\n"
}
console.log(str)


let strr=""
for(let a=0; a<n;a++){
  for(let b=1; b<=n-a; b++){
    strr+="*"
  }
  strr+="\n"
}
console.log(strr)