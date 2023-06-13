//challenge : sum of n

const sum = (n) => {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        console.log(sum, "sum", i, "i");
        sum += i;
    }
    return sum;
};

console.log(sum(2));
console.log(sum(10));

//Challenge: Write a shopping list
const shoppingList = ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];

function addNumbersToShoppingList() {
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`${i+1}. ${shoppingList[i]}`);
    }
}
addNumbersToShoppingList();

//## Challenge: Capitalizing Odd Positioned Letters
const wordStr = "computer"
let newStr = ""

for (let i = 0; i < wordStr.length; i++) {
  if (!(i % 2)) {
    newStr += wordStr[i].toUpperCase()
  } else {
    newStr += String.fromCharCode(wordStr[i].charCodeAt(0)+1)
  }
}
console.log(newStr);

//removing vowels
const nameWithVowels = "martyna";
const nameWithoutVowels = nameWithVowels.replace(/[aeiou]/gi, "");

console.log(nameWithoutVowels);

//kai
// const stringName = "martyna";
// let stringNameNoVowels = "";
// const vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < stringName.length; i++) {
//     let char = stringName[i];
//     if (!vowels.includes(char)) {
//         stringNameNoVowels += char;
//     }
// }

// console.log(stringNameNoVowels, "- this is for part 1");

//bonus- 
//kai

const stringName = "martyna";
let stringNameNoVowels = "";
const vowels = ["a", "e", "i", "o", "u"];
const specialLetters = ["l", "m", "r"];



for (let i = 0; i < stringName.length; i++) {
    let char = stringName[i];
    let nextChar = stringName[i + 1];
    // add the character if: a) not a vowel, or b) the next character is a vowel but is succeeded by a special character
    if (
        !vowels.includes(char) ||
        (nextChar && specialLetters.includes(nextChar))
    ) {
        stringNameNoVowels += stringName[i];
    }
}

console.log(stringNameNoVowels, "- this is the bonus part");

//loop array backwards
//jack
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = arr.length-1; i > -1; i--) {
  console.log(arr[i])
}
