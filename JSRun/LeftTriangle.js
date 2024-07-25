let n =window.prompt("enter no of lines")
let str=""
for (let i = 1;i<=n ;i++ ) {
  for (let j = 0; j < i; j++) {
    str+="*"
  }
  str+="\n"
}
console.log(str)