// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "vivo"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "vivo@gmail.com",
    fullname: {
            userfullname:{
                firtstname:"vivek",
                lastname: "kumbhar"
            }
    }
}
// console.log(regularUser.fullname.userfullname.firtstname) ; 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        email: "vivo@gmail.com"
    },
    {
        id:1,
        email: "vivo@gmail.com"
    },
    {
        id:1,
        email: "vivo@gmail.com"
    },
    {
        id:1,
        email: "vivo@gmail.com"
    },
    {
        id:1,
        email: "vivo@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//**************************** de-structure *********************
const cource = {
    price : '985',
    courceInstructor: "vivek"
}

//cource.courceInstructor

const {courceInstructor} = cource
console.log(courceInstructor);

// **************** de-structure **********************
const navbar = ({company}) => {  //de-structure

}

navbar(company="vivek")

//********** JSON ***************** json struture

// {
//     "name" : "vivek",
//     "courcename" : "js in hindi",
//     "price" :"free"
// }

[
    {},
    {},
    {}
]
