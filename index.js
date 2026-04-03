// ===== VARIABLES PRACTICE =====

// let example
let name = "Sumit";
let age = 20;

console.log("Name:", name);
console.log("Age:", age);

console.log("---------------")
// changing value
age = 21;
console.log("Updated Age:", age);

console.log("---------------")
// const example
const country = "Nepal";
console.log("Country:", country);

console.log("---------------")
// var example (avoid in real projects)
var city = "Kathmandu";
console.log("City:", city);


console.log("---------------------")
// ===== DATA TYPES PRACTICE =====

let name2 = "Sumit"; // string
let age2 = 20; // number
let isStudent = true // boolean
let x; //undefined
let y = null; // null

console.log(typeof name2);
console.log(typeof age2);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);

// Practice

let marks = 20;
let isPassed = true;
let a;

console.log(typeof name2);
console.log(typeof marks);
console.log(typeof isPassed);
console.log(typeof a);

// Mini Task

console.log(`My name is ${name} (${typeof name}).`);
console.log(`My age is ${age} (${typeof age}).`);
console.log(`I am a student: ${isStudent} (${typeof isStudent}).`)


console.log("---------------------")
// ===== OPERATORS PRACTICE =====

let b = 10;
let c = 5;

// arthametic
console.log(b+c); // Add
console.log(b-c) // Sub
console.log(b*c) // Multiplication
console.log(b/c) // Division (Gives remainder)

console.log("---------------")
// comparison
console.log(b > c);
console.log(b == c); // 10 == 10 used for true
console.log(b === c) // 10 === 10 used for false

console.log("---------------")
// logical
let age3 = 20;

console.log(age3 > 18 && age3 < 25); // true
console.log(age3 > 18 || age3 < 10); // true
console.log(!(age3 > 18)); // false

console.log("---------------")
// Assignment operators

let z = 10;

console.log(z +=5); // x = x+5-->15
console.log(z -=5); // x = x=5-->10

console.log("---------------")
// practice

// Find remainder of 15 % 4
console.log(15/4);

// Check if 20 is greater than 10
console.log(20 > 10);

// Compare "5" and 5 using == and ===
console.log("5" == 5);
console.log("5" === 5);

// Use || operator in a condition
let d = 15
console.log(c > 18 || c < 10);


console.log("---------------------")
// ===== IF ELSE PRACTICE =====

let age4 = 17;

if (age4 >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

console.log("---------------")
// marks example
let marks2= 65;

if (marks2 >= 80) {
    console.log("Excellent");
} else if (marks2 >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

console.log("---------------")
// Mini Task

//Login check

username ="Sumit";
pass = "1234";

if (username == "Sumit" && pass == "1234") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Credentials");
}
