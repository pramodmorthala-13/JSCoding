let n=window.prompt("enter no of rows")
let str=""
for(let i=n;i>=1;i--){
  for(let k=0;k<=n-i;k++){
    str+=" "
  }
  for(let j=1;j<=(2*i)-1;j++){
    str+="*"
  }
  str+="\n"
}
console.log(str)