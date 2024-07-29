//bind() polyfill

// create a obj 

let obj={
    name:'pramod'
}

function myName(id, city){
    console.log(this.name, id, city)
}

Function.prototype.mybind=function(obj, ...args){
    const fun=this;
    return function(...newArgs){
        fun.apply(obj,[...args,...newArgs])
    }
}

const myName1 = myName.mybind(obj, 2);
console.log(myName1("wgl")) 