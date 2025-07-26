// let myNmae = "vivek     "
// let mychanel = "kumbhar    "

// console.log(myNmae.trueLength);

let myHero = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web-shooters",

    getSpiderPower: function() {
    console.log(`spidy power is ${this.spiderman}`); 
    }
}

    Object.prototype.vivek = function() {
    console.log(`vivek presnt in all object `); 
}

Array.prototype.heyvivek = function() {
    console.log(`vivek hello`);
}

  
//   heroPower.vivek()
// myHero.heyvivek()
// heroPower.heyvivek()  

//          inheritance

const User = {
    name: "vivek123",
    email: "vivek@gmail.com"

}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername  ="vicekkumbhar"

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"vivek".trueLength()
