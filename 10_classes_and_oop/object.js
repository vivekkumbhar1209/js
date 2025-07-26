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
