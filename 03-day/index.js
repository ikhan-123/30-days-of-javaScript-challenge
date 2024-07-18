// Control Structures
// Acivity 1: if-Else Statement
// Task 1:
let num = 46;
if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//  Task 2:
let age = 22;
if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

// Activity 2
// Task 3:
let numa1 = 5
let numa2 = 10
let numa3 = 15
if (numa1 > numa2 && numa1 > numa3) {
    console.log(numa1 + " is the largest number");
} else if (numa2 > numa1 && numa2 > numa3) {
    console.log(numa2 + " is the largest number");
} else {
    console.log(numa3 + " is the largest number");
}
// Activity 3
//  Task 4:
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");

    default:
        console.log("Invalid day");
        break;
}
// Task 5:
let grad;
let score = 80;
switch (true) {
    case (score >= 90 && score <= 100):
        grad = "A";
        break;
    case (score >= 80 && score < 90):
        grad = "B";
        break;
    case (score >= 70 && score < 80):
        grad = "C";
        break;
    case (score >= 60 && score < 70):
        grad = "D";
        break;
    case (score >= 50 && score < 60):
        grad = "E";
        break;
    case (score < 50):
        grad = "F";
        break;
    default:
        grad = "Invalid score"
        break;
}
console.log(`The grade for score ${score} is: ${grad}`);
// Activity 4
// Task 6:
let myNum = 3;
(myNum % 2 == 0) ? console.log("Even") : console.log("Odd");

// Activity 5
// Task 7:
let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log("year is leap");
} else {
    console.log("year is not leap");
}