var p12=new Promise((x,y)=>{
    const res=false;
    if(res){
        x("its true")
    }else{
        y("its false")
    }
})
console.log(p12)

p12.then((val)=>{console.log(val)})
    .catch((val)=>{console.log(val)})


//promise.all() Waits for all promises to be resolved or any one to be rejected

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 1000);
    });
    var p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('two'), 2000);
    });
    var p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('three'), 3000);
    });
    var p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('four'), 4000);
    });
    var p5 = new Promise((resolve, reject) => {
    reject(new Error('reject'));
    });
    
    // Using .catch:
    Promise.all([p1, p2, p3, p4, p5])
    .then(values => {
    console.log("promise.all==>",values);
    })
    .catch(error => {
    console.error("promise.all==>",error.message)
    });
    
    //From console:
    //"reject"

//------------------Promise.allSetlled()--------------------//
//=>Waits until all promises are either resolved or rejected

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises1 = [promise1, promise2];

Promise.allSettled(promises1).
  then((results) => results.forEach((result) => console.log("promise.allSetlled==>",result.status)));

// expected output:
// "fulfilled"
// "rejected"

//------------------Promise.any()--------------------//
//=>Returns the promise value as soon as any one of the promises is "fulfilled(only success)"
const promise12 = Promise.reject(0);
const promise22 = new Promise((resolve) => setTimeout(resolve, 800, 'slow'));
const promise32 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));

const promises2 = [promise12, promise22, promise32];

Promise.any(promises2).then((value) => console.log("promise.any==>",value));

// expected output: "quick"

//------------------Promise.race()--------------------//
//=>Wait until any of the promises is "setlled (resolved or rejected)"

const promise13 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise23 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise13, promise23]).then((value) => {
    console.log("promise.race==>",value);
    // Both resolve, but promise2 is faster
  });
  // expected output: "two"