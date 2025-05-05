
function sayMyName (){
    console.log("V");
    console.log("I");
    console.log("V");
    console.log("E");
    console.log("K");
    
}
// sayMyName ()  referance 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log("Result: ", result);


function loginuserMessage(username ="sam") {
    //if(username === undefined){
    if(!username){  
    console.log("please enter user name");
        return 

    }
    return `${username} just logged in`;
}
   // console.log(loginuserMessage("vivek"));
// console.log(loginuserMessage("vivek"));


function calculateCartprice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartprice(200,400,500,2000))

const user = {
    username: "vivek",
    price: "2000"
};

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

handleObject({
 username: "vivo",
 price:7125
})

const myNewArray = [200,400,500,600]

function returnSecounfValue(getArray){
    return getArray[1]
}
console.log(returnSecounfValue(myNewArray));