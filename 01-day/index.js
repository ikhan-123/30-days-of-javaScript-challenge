console.log("javaScript Challenge");
// Day 1: Variables and DataTypes

// Activity 1: Variable Declaration 
// Task 1: Declare a variable using var, assign it a number, and the value to the console.

//Task 1 Ans: 
var num = 5
console.log(num);

//Task 2: Declare a variable using let, assign it a string, and the value to the console.
//Task 2 Ans:
let myStr = "irfan";
console.log(myStr);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

// Task 3 Ans:
const myBoolean = true;
console.log(myBoolean);

// Activity 3: Data Types
//Task 4: Create varibales of diffrent data types (number, string, boolean, object, array) and log each variable's type using the (typeof) operator.

// Task 4 Ans:
const myName = "Irfan khan";
const myAge = 24;
const isLogedIn = true;
const myArray = ["Irfan", "khan", "24"];
const myObject = {
    name: "Irfan khan",
    email: "ifficodder@gmail.com"
}
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isLogedIn);
console.log(typeof myArray);
console.log(typeof myObject);

// Activity 4: Reassigning Variables
//Task 5: Declare a variable using (let), assign it an initial value, reassign a new value, and log both values to the console.

// Task 5 Ans:
let bankBalance = 50000
console.log("BeforeTransaction", 50000); // Logs: Initial value: 50000
bankBalance = 20000
console.log("AfterTransaction",20000); //Logs: New value: 20000

// Activity 5: Understanding (CONST)
//Task 6: Try reassigning a variable declared with (cosnt) and observe the error.

// Task 6: Ans
  const userId = "1212"
  console.log(userId);
  userId = "2121" // we can not change the value if we assign in (CONST)
  // This will show TypeError: Assignment to constant variable.
  console.log(userId);













