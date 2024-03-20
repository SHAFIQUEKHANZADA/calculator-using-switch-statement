import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

let num1 = await inquirer.prompt([{
    name: "val1", type: "number", message: "Enter the first number"}])
let choose = await inquirer.prompt([{
    name: "chos", type: "list", message: "Choose an operator",
    choices: ["+", "-", "*", "/", "%"]
}]) 
let num2 = await inquirer.prompt([{
    name: "val2", type: "number", message: "Enter the second number"
}])
let result: number = 0
switch (choose.chos[0]) {
    case "+":
        result = num1.val1 + num2.val2
    break;  
    case "-":
        result = num1.val1 - num2.val2
    break;
    case "*":
        result = num1.val1 * num2.val2
    break;
    case "/":
        result = num1.val1 / num2.val2
    break;
    case "%":
        result = num1.val1 % num2.val2
    break;
    default: console.log("error");        
}
console.log(`The result is ${result}`);
