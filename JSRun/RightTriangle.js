let n=window.prompt("enter rows")
let str=""
for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n; j++) {
    if((i+j)<=n){
      str+=" ";
    }else{
      str+="*";
  }
  }
  str+="\n";
}
console.log(str)