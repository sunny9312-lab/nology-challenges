// Challenge: Comparing Numbers

// MVP:
// Check for the smallest value

// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y

// let x = 5;
// let y = 1;

// if (x > y) {
//     console.log("x is greater than y");
// } else if (x < y) {
//     console.log("x is smaller than y");
// } else if (x === y) {
//     console.log("x is equal to y");
// }

// Challenge: User Input Type

// MVP:
// Console log the user's input depending on the data type

// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say "invalid input"
// let userInput = true;

// userInput = prompt("Please enter an input");

// if (parseInt(userInput)) {
//     console.log(userInput ** 2);
// } else if (userInput === "true" || userInput === "false") {
//     console.log("invalid input");
// } else {
//     console.log(userInput);
// }

let parent1Eye = "brown";
let parent2Eye = "brown"; 
let childEyeColor = "brown";

// parent1Eye = prompt("Please enter your eye color");
// parent2Eye = prompt("Please enter your partner's eye color");

switch (parent1Eye && parent2Eye) {
    case "brown" && "brown":
        console.log("Your child's eye colour could be 75% brown, 18.75 % green and 6.25% blue ");
        childEyeColor = "brown";
        break;
    case "brown" && "green":
        console.log("Your child's eye colour could be 12.5% blue, 50% brown and 37.5% green");
        childEyeColor = "brown";
        break;

    case "blue" && "brown":
    case "brown" && "blue":
        console.log("Your child's eye colour could be 50 % blue, 50% brown and 0% green");
        childEyeColor = "blue";
        break;
    case "green" && "green":
        console.log("Your child's eye colour could be 25 % blue, less than 1% brown and 75% green");
        childEyeColor = "green";
        break;
    case "green" && "blue":
    case "blue" && "green":
        console.log("Your child's eye colour could be 50 % blue, zero% brown and 50% green");
        childEyeColor = "blue";
        break;
    case "blue" && "blue":
        console.log("Your child's eye colour could be 99 % blue, zero% brown and 1% green");
        childEyeColor = "blue";
        break;
    default:
        console.log("Eye color combination not recognised")

}


switch (childEyeColor) {
  case "brown":
    console.log("It's my favourite eye colour");
    break;
  case "blue":
    console.log("It's my least favourite eye colour");
    break;
  case "green":
    console.log("It's medicore eye colour");
    break;
  default:
    
}


