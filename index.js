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
console.log(b/c) // Division
console.log(b%c) // (remainder)

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
console.log(15%4);

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

// Practice

// Check if number is even or odd

let e = 20;
if (e % 2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}

console.log("---------------")
// Check if a person can drive (age >= 18)

if(age >= 18){
    console.log("Can drive");
}else{
    console.log("Cannot drive");
}

console.log("---------------")
// Check if marks >= 40 → Pass else Fail

if (marks >= 50){
    console.log("Pass");
}else{
    console.log("Fail");
}

console.log("---------------")
// Create 3 conditions (A, B, Fail based on marks)

if (marks >= 80){
    console.log("A");
}
else if(marks >= 60){
    cpmsole.log("B");
}
else if(marks >= 40){
    console.log("C")
}else{
    console.log("Fail");
}

console.log("---------------")
// Check if number is positive, negative, or zero
let num = 1
if (num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Neg");
}else{
    console.log("Zero");
}


console.log("---------------")
// Mini Task

//Login check

let username ="Sumit";
let pass = "1234";

if (username == "Sumit" && pass == "1234") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Credentials");
}


console.log("---------------------")
// Switch

let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thrusday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default:
        console.log("Invalid day");

}

console.log("---------------")
// mini task

let choice = 1

switch(choice){
    case 1: 
        console.log("Start Game");
    break;
    case 2: 
        console.log("Setting");
    break;
    case 3:
        console.log("Exit");
    break;
}

console.log("---------------")
// ===== Loops =====

// For loops

for (let i = 1; i <= 5; i++){
    console.log("Hello", i);
}

console.log("---------------")
// while loop

let i = 1;
while (i <= 5){
    console.log(i);
    i++;
}

console.log("---------------")

// Practice

// Print even numbers from 1–20
let num2 = 1;

while (num2 <= 10) {
    console.log(num2);
    num2++;
}

console.log("---------------")
// Print table of 5

num = 5;
i = 1;

while(i <= 10){
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
}

console.log("---------------")
// Mini Task

for (let i = 1; i <=5; i++){
    let row = "";

    for (let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}

console.log("---------------")
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
