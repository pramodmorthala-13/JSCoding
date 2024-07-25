let n=window.prompt("enter no")
let str=""
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n-i; j++) {
    str+=" ";
  }
  for (let k = 0; k < 2*i-1; k++) {
    str+="*";
  }
  str+="\n"
}
console.log(str)