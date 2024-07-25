const myPromise = new Promise((resolve,reject )=>{
  let isPro=true;
  if(isPro){
    resolve("resolved")
  }else{
    reject("reject")
  }
})

myPromise.then((ms)=>console.log(ms)).catch((er)=>console.log(er))