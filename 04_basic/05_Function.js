
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


