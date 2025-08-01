
class User {

    constructor(username){
        this.username = username
    }

    logeMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(usernmae, email, password){
        super(usernmae)
        this.email = email
        this.password = password
    }

    addCource(){
        console.log(`New cource added by ${this.username}`);
    }
}

const chai  = new Teacher("abc", "abc@gmail.com", "123")

chai.addCource()
const masalachai = new User("masalachai")

masalachai.logeMe()

console.log(chai instanceof User);
