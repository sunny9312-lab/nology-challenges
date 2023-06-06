
let x = 3;
let y = 6;

if (x > y) {
    console.log("x is greater thatn y");

} else if (x < y) {
    console.log("x is smaller than y");
} else {
    console.log("x is equal to y");
}

// let userInput = "abc";

// userInput = prompt("please enter an input");
// console.log(userInput);

// if (userInput === String) {
//     console.log(("input is ") + userInput);
// } else if (userInput === Number) {
//     console.log(userInput = userInput * userInput );
// } else {
//     console.log("invalid input");
// }
// console.log("");

let userInput = true;
userInput = prompt("please enter an input");

if (typeof userInput === "number"){
    console.log(userInput)
} else if (typeof userInput === "string"){
    console.log(userInput);
} else {
    console.log("invalid input");
}

if (parseInt(userInput)){
    console.log("this is a  number");
    console.log(userInput ** 2);
}

//tell me the day
// switch statement
let fruit = "raspberry";

switch (fruit) {
    case "apple":
        console.log("This is an apple");
        break;
    case "orange":
        console.log("The fruit is orange");
        break;
    case "strawberry":
    case "raspberry":
        console.log("The fruit is a berry");
        break;
    default:
        console.log("I don't know what fruit it is");
}

let inputDay = true;
userInput = prompt("please enter date");
// userInput = prompt("please enter date");
