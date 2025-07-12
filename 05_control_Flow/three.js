// for of 

// [" "," "," "]  => array has string value 
// [{ },{ },{ }] => array has object value 

const arr = [1,2,3,4,5]
for (const element of arr) { // for of loop is used to iterate over iterable objects like arrays, strings, etc.
    // console.log(element);
    
}

const greeting = "Hello world"
for (const greet of greeting) { // for of loop is used to iterate over iterable objects like arrays, strings, etc.
  //  console.log(`Array of each element : ${greet}`) 
}

// maps

const map = new Map()
map.set('IN',"India")
map.set('us',"United States")
map.set('UK',"United Kingdom")

//console.log(map);

for (const [element, value]  of map) { 
//console.log(element, ":", value); // this will print the key value pair as an array
    
}

//  for in loop for object

const object = {
    cpp : "C++",
    c: "c",
    swift: "Swift by googel",
}

for (const key in object) {

//    console.log(`${key} shortcut is for ${object[key]}`); 
}

// for in for array

const programming = ["C","C++","JavaScript","Python","ruby"]

for (const key in programming) {
    // console.log(key); // this will print the index of the array
    console.log(programming[key]); // this will print the value of the array at that index

}
