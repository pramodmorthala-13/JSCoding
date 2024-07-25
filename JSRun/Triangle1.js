let n=window.prompt("enter")
//let n=5
let str=""
for(let i=1; i<=n;i++){
  for(let space=1; space<=n-i; space++){
    str+=" ";
  }
  for(j=1;j<=i;j++){
    str+="* "
  }
  str+="\n"
}
console.log(str)

//without space

let m=window.prompt("enter")
//let m=5
let strr=""
for(let i=1; i<=m;i++){
  for(let k=1; k<=m-i; k++){
    strr+=" ";
  }
  for(j=0;j<(2*i)-1;j++){
    strr+="* "
  }
  strr+="\n"
}
console.log(strr)

