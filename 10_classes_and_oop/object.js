function multiplyBy5 (num){
    return num * 5;
}
multiplyBy5.power = 2

// console.log(multiplyBy5(2));             // 10
// console.log(multiplyBy5.power);            // 2
// console.log(multiplyBy5.prototype);         // undefined
// console.log(typeof multiplyBy5);           // function

function createUser(username, score){
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function() {       // adds a method to the prototype
    this.score++ 
}
createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}` );   // adds another method to the prototype
}

const chai = new createUser("chai",25)
const tea =  createUser("tea",30)

chai.printMe()              // price is 25


/*
A new object is created when a function is called with the `new` keyword.

A prototype is an object that is associated with a function and can be used to add methods or properties 
that will be shared by all instances of that function when called with `new`.

the constructor function `createUser` is used to create new user objects,
and the `prototype` property is used to add methods that can be shared by all instances of `createUser`.

the new object created by `new createUser` has access to the methods defined on the `createUser.prototype`.

the new object returns the newly created object, which is an instance of `createUser`.

*/