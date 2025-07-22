const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DO calls, cryptography, netwokrk
    setTimeout(function() {
        console.log('Async task completed');
    resolve()
 }, 1000)
})

promiseOne.then(function() {
    console.log('Promise resolved');
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
    console.log('Async task 2');
        resolve()
},1000)

}).then(function() {
    console.log('Asych task 2 resolved');
})

// ###############################  three promises in parallel ############################
const promiseThree =  new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "vivek", email: "vivekkumbhar3310@gmail.com"})
    }, 1000)

})

promiseThree.then(function(user) {
    console.log(user);

})

//################# four promis  #####################
const promiseFour = new Promise(function(resolve, reject) { 
    setTimeout(function() {
        let error = false;                  // Change to true to simulate error
        if (!error) {
            resolve({ username: "vivek", password: "123" });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then(user => {                          // Handle success
        console.log(user);
        return user.username;
    })
    .then(username => {
        console.log(username);
    })
    .catch(err => {                            // Handle error
        console.log(err);
    }).finally(() => console.log('Promise is either resove or reject')); 

// #########################  promise five ##################

const promiseFive = new Promise(function(resolve, reject) {
          setTimeout(function() {
        let error = false;                  
        if (!error) {
            resolve({ username: "Javascript", password: "1243" });
        } else {
            reject('Error: JS went wrong');
        }
    }, 1000);

})

async function consumePromiseFive() {
  const response = await promiseFive;
  console.log(response);
}

consumePromiseFive();

// ##########################

// async function getAllusers(){
//     try {const responce = await fetch('https://jsonplaceholder.typicode.com/users');
//        // console.log(responce);                                     // This will log the response object
//     const data = await responce.json()
//        console.log(data);
//     } catch (error) {
//     console.log('Error fetching users:', error);
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();    
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))