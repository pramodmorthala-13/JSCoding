let n=window.prompt("enter a num")
let str=""
for(let i=1;i<=n;i++){
  for(let j=1; j<=i;j++){
    str+=String.fromCharCode(64+j)
  }
  str+="\n"
}
console.log(str)