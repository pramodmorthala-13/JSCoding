const a=[1,2,3,4,5]
const b=[1,6]
const getCommon=(a,b)=>{
  let common=[];
  for(let i=0; i<a.length;++i){
    for (let j = 0; j < b.length; ++j) {
      if(a[i]==b[j]){
        common.push(a[i])
      }
    }
  }
  return common;
}
console.log(getCommon(a,b))



const c=a.concat(b)
const unique=c.filter((v,i)=>{
  return c.indexOf(v)!==i
})
console.log(unique)