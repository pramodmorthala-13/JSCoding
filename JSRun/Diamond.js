let n=5
let str=""
for(let i=1;i<=n;i++){
  for(let k=1;k<=n-i;k++){
    str+=" "
  }
  for(let j=1;j<=(2*i)-1;j++){
    str+="*"
  }
  str+="\n"
}
  for(let i=n-1;i>=1;i--){
    for(let k=1;k<=n-i;k++){
      str+=" "
    }
    for(let j=1;j<=2*i-1;j++){
      str+="*"
    }
 
  str+="\n"
}
console.log(str)