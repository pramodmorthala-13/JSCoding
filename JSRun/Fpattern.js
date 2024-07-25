const n=5;
let str="";
for(let i=1; i<=n; i++){
  for (let j=1; j<=n; j++){
    if(j==1 || i==1 || i==Math.floor((n+1)/2)){
      str+="* ";
    }
  }
  str+="\n";
}
console.log(str);