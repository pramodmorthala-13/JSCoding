// What is the difference between dot notation and square bracket notation in accessing object properties?
// Answer: The dot notation is used when you know the property name at the time of coding. The square bracket notation is used when you want to access the property dynamically, for example, when the property name is stored in a variable.


// How do you add a new property to an object in JavaScript
const person1={
    name:'pramod', 
    age:25
}
// let person.city="wgl"



// How do you remove a property from an object in JavaScript?
delete person1.age;

// How do you check if an object has a property in JavaScript
console.log(person1.hasOwnProperty('name'))

// How do you create an object using a constructor function in JavaScript?

function details(name,age){
    this.name=name;
    this.age=age;
}

let deatils1= new details('pramod',25)



// What is the output of the following code?
let person2 = {

    name: 'John',
    
    age: 30,
    
    greet: function() {
    
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    
    }
    
    };
 person2.greet(); 


//  What is the output of the following code?
let person3 = {

    name: 'John',
    
    age: 30,
    
    greet: function() {
    
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    
    }
    
    };
    
    let greetFunc = person3.greet;
    
    greetFunc(); 
//here you can use call, bind, apply greetFunc.call(person) or greetFunc.bind(person) or greetFunc.apply(person)


