const user = {
    username : "Vivek",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function () {
        // console.log("Get User Details from database");
       // console.log(`Username: ${this.username}` );
       console.log(this);
    }
    
        
}
// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);

// #####################  constructor function ##############3

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

   this.greeting = function ()
{
    console.log(`Hello ${this.username}`);
}    
    return this;
}

const user1 = new User("Vivek", 8, true);
const user2 = new User("John",5 , false);
console.log(user1.constructor);
//console.log(user1);
//console.log(user2);

