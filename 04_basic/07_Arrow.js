const user = {
    name: "vivek",
    price: 100,

    welcomeMessage: function(){
       //  console.log(`${this.name} , welcome to website`);
       // console.log(this);

    }
}
// user.welcomeMessage()
// user.name="sam"
// user.welcomeMessage()

//console.log(this); empty print 

//***************************************************** */

// function chai (){
//     let username = "vivek"
//     console.log(this.username);  // undefined print
// }
// chai()

// Arrow functoion
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5)) 

// Emplicit return function
const addTwo = (num1,num2) =>   num1 + num2

console.log(addTwo(4,5)) 