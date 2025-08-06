const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);
// console.log(Math.PI);     // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);    // 3.141592653589793     


const chai = {
    name: "ginger chai",
    price: 50,
    isAvailable: true,
    
    orderChai: function () {
        console.log("Chai ordered");
    }
};

console.log("Before defineProperty:");
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Making 'name' non-writable and non-configurable
Object.defineProperty(chai, "name", {
    writable: false,
    configurable: false
});

console.log("After defineProperty:");
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Iterating through properties
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}


// In javascript math.pi value is 3.14... can change the value or not in js. If the value is chage to 3.14 to 4 how is possible

// In JavaScript, Math.PI cannot be changed directly.

// 🔐 Why?
// Because the Math.PI property is:

// non-writable

// non-configurable

// non-enumerable

// This means:

// You cannot modify it

// You cannot delete it

// You cannot redefine it