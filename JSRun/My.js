//console.log(a)
//let a = 10

console.log("a")
setTimeout(()=> {
  console.log("b")
}, 1000);
setTimeout(()=> {
  console.log("c")
}, 0);
setTimeout(()=> {
  console.log("d")
}, 1);
console.log("e")
console.log(typeof(null))


const x=[5,6,7,0];
let y=1000;

for(let i of x){
  i--;
  y+=i;
}
console.log(y+x[3-1],"log")


const arr1=["p","d","g"]
const arr2=["d","j","r"]
arr2.push("h","u","l")
console.log(arr2)
const myres=arr1.join('')
console.log(arr1.join('').toString())



let name="hi"
name="hello"
console.log(name)


const febo=(n)=>{
  const feb=[0,1];
  for(let i=2;i<n;i++){
    feb.push(feb[i-1]+feb[i-2])
  }
  return feb;
}

console.log(febo(10))


///////
const dup=(str)=>{
  let res="";
  let seen = new Set();

  for(let i=0;i<str.length;i++){
    if(!seen.has(str[i]) || str[i-1] ==str[i]){
      res+=str[i]
      seen.add(str[i])
    }
  }
  return res;
}

console.log(dup("hello"))



}