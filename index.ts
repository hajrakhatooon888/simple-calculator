#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perfrom operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "multiplication", "division"],
  },
]);
// //  console.log(answer);

// // Conditional sta tement

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
     console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
 console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}else{
  console.log("please select valid operator");
  
}
    