function SetUsername(username){
    // complex DB call
    this.username = username;
}

function createUSer(username, email, password){
    SetUsername.call(this, username)
    //console.log("called") 
    
    this.email = email;
    this.password = password;
}

const chai = new createUSer("chai", "chai@123.com", "123")
console.log(chai)