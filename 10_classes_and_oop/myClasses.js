//  ES6

class User {
    constructor (Username, email, password){
        this.Username = Username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}xyz`
    }

    changeUsername(){
        return `${this.Username.toUpperCase()}`
    }

}

const abc = new  User ("abc", "abc@gmail.com", "123")

console.log(abc.encryptPassword());
console.log(abc.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Method to encrypt password
User.prototype.encryptPassword = function () {
    return `${this.password}pqr`;
};

// Method to change the username (example: make it uppercase)
User.prototype.changeUsername = function () {
    this.username = this.username.toUpperCase();
    return this.username;
};

// Create an instance
const vivo = new User("vivo", "vivo@gmail.com", "123");

// Test the methods
console.log(vivo.encryptPassword());   // Output: 123pqr
console.log(vivo.changeUsername());    // Output: VIVO
console.log(vivo.username);            // Output: VIVO (changed)
