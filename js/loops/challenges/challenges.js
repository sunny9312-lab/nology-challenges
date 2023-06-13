//MVP Challenge: Sum of n
const sum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(10));

function addSum(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(addSum(10));

//['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
//write a shopping list
//const anotherList = ["coffee", "bread"];

const arr1 = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
const anotherList = ["coffee", "bread"];

function addNumbersToShoppingList (arr) {
    for (let i = 0; i < arr.length; i++) {
        
        console.log(`${arr[i]}`);
    }
}

addNumbersToShoppingList(arr1);
addNumbersToShoppingList(anotherList);

// Capitalizing Odd Positioned Letters
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string

const wordStr = "abzzz";
let newStr = "";

for (let i = 0; i < wordStr.length; i++) {
    if (i % 2) {
        newStr += wordStr[i].toUpperCase();
    } else {
        console.log(wordStr[i], "current letter");
        console.log(wordStr[i].charCodeAt(0));
        console.log(
            String.fromCharCode(wordStr[i].charCodeAt(0) + 1),
            "incremented char"
        );

        // WHAT TO DO WHEN WE HAVE Z?
        if (wordStr[i] === "z") {
            // add a to our string

            // what is the char code for a? 97
            newStr += "a";
        } else {
            newStr += String.fromCharCode(wordStr[i].charCodeAt(0) + 1);
            console.log("here?")
        }
    }
}

console.log(newStr);




