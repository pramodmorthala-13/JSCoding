//Promise.all() polyfill

Promise.myPromiseAll=(promiseArr)=>{
    let result=[];
    let completed=0;
    return new Promise((resolve,reject)=>{
        promiseArr.forEach((value,i) => {
            Promise.resolve(value).then((res)=>{
                result[i]=res;
                completed++

                if(completed === promiseArr.length){
                    resolve(result)
                }
            }).catch(err=>reject(err))
        });
    })
}

const promise1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("resoleved 1")
    },1000)
})

const promise2=Promise.resolve("resolved 2")
const promise3 = 3

const promiseAll=Promise.myPromiseAll([promise1,promise2,promise3])

promiseAll.then((re)=>console.log("All",re)).catch((e)=>console.log("All",e))

//Promise.any()
Promise.myAny=(arr)=>{
    let result=[];
    let counter=0;
    return new Promise((resolve,reject)=>{
        arr.forEach((val,i)=>{
            Promise.resolve(val)
            .then(res=>resolve(res))
            .catch((e)=>{
                result[i]=e;
                counter++
                if(counter===arr.length){
                    reject(result)
                }
            })
        })
    })
}

const promise11 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("resoleved 1")
    },1000)
})

const promise21=Promise.reject("resolved 2")
const any=Promise.myAny([promise11,promise21])

any.then(e=>console.log("any",e)).catch(e=>console.log("any",e))

//allSettled()

Promise.myPromiseAllSettled=(ar)=>{
    let wrappedPromises =ar.map((promise)=>{

      return Promise.resolve(promise)
       .then((val)=>({status:"fufilled",value:val}))
       .catch((er)=>({status:"rejected", reason:er}))
    }
    )
    return Promise.all(wrappedPromises)
}

const promise4 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("resoleved 1")
    },1000)
})

const promise5=Promise.resolve("resolved 2")
const promise6 = 3

const promiseAllSettled=Promise.myPromiseAllSettled([promise4,promise5,promise6])

promiseAllSettled.then((res)=>console.log(res))


//promise.race

Promise.myRace=(pa)=>{
    return new Promise((resolve,reject)=>{
       pa.forEach(val=>{
        Promise.resolve(val)
        .then((data)=>resolve(data),e=>reject(e))
       })
    })
}

const rece=Promise.myRace([promise5,promise4,promise6])
rece.then(val=>console.log("race",val))