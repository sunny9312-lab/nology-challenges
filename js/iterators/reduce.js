// REDUCE

// we can use it if we want to reduce an array to a single value

const numbers = [1, 2, 3, 4, 5];

let sum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

// here we will only pass one param to reduce
const reduceSum = numbers.reduce((total, current) => {
    console.log({ total, current });
    return total + current;
});
// if we don't pass an initial value to reduce, it defaults to the first element in the array

// we will pass another optional param to reduce

let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}

const reduceSumWithInitVal = numbers.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr;
}, 0);
console.log(reduceSumWithInitVal);

// strings

const letters = ["h", "e", "l", "l", "o"];

const word = letters.reduce((accumulator, current) => {
    console.log({ accumulator, current });
    return (accumulator += current);
}, "");

// what is going on inside the reduce?
// this reduce has an initial Value passed to it

// 1st iteration
// accumulator has the value of initial value
// current is the 1st element of the array
// acc = "", curr = "h"

// I add acc and curr -> "h"

// 2nd iteration
// accumulator is now "h"
// current is the next element in the array - "e"
// I add accumulator and current -> "he"

// 3rd iteration
// acc = "he", curr = "l"
// acc + curr -> "hel"

// 4th iteration
// acc = "hel", curr = "l"
// I add acc and current -> "hel" + "l" -> "hell"

// 5th iteration
// acc = "hell", curr = "o"
// acc + curr -> "hello"

console.log(word);

// let word = ""

// "12345"
const stringFromNumbers = numbers.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr;
}, "");
console.log(stringFromNumbers);

// I want a string with all letters to uppercase without anything between

const lowerCaseLetters = ["n", "o", "l", "o", "g", "y"];

const upperCaseStr = lowerCaseLetters.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr.toUpperCase();
}, "Hi, ");

console.log(upperCaseStr);

// we can use reduce like we would use map -> to get a new array of the same length back
const numbersToDouble = [4, 5, 8];

const doubledWithReduce = numbersToDouble.reduce((acc, curr) => {
    console.log({ acc, curr });
    const doubledItem = curr * 2;
    acc.push(doubledItem);
    return acc;
}, []);

console.log(doubledWithReduce, "doubled with reduce");

// we can use reduce like we would use filter -> to get an array of elements that fulfilled a certain condition

// I want an array of even numbers
const numbersToFilter = [12, 45, 62, 57];

const evenNums = numbersToFilter.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(evenNums, "even numbers");

// given an array of character codes, convert the codes to letters and reduce it to a single string

// const arrOfCodes = [114, 101, 100, 117, 99, 101];
//sunny

// const arrofLetters = arrOfCodes.reduce((acc, curr) => {
//     for (let i = 0; i < arrOfCodes.length ; i++ )
//         let char = arrOfCodes(curr);

//         arrofLetters = char.fromCharCode(curr);

    
//     return arrofLetters;
// }, []);

// console.log(arrofLetters, "arrofLetters");

//sunny


// given an array of character codes, convert the codes to letters and reduce it to a single string
//roche
const arrOfCodes = [114, 101, 100, 117, 99, 101];
const codesToLetters = arrOfCodes.reduce((acc, curr) => {
    console.log({ acc: acc, charCodeFromCurr : String.fromCharCode(curr)});
    return acc + String.fromCharCode(curr);
},"");
console.log(codesToLetters, "codes to letter");
//roche


// given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];
//kai
// const sumOfCodes = lettArr.reduce((acc, curr) => acc + curr.charCodeAt(), 0);

// console.log(sumOfCodes, "- sum of the character codes");
//kai
//->621

//amrutha

const sumOfCodes = lettArr.reduce((acc, curr) => {
  const charCode = curr.charCodeAt(0);
  return acc + charCode;
}, 0);

console.log(sumOfCodes);
//amrutha

// use reduce to filter an array to only get numbers greater than 10
const numsArr = [1, 345, 545, 2, 5, 7, 907];
//janet
const greaterThan10 = numsArr.reduce((previousValue, currentValue) => {
    console.log(
        `Previous value: ${previousValue}, current value: ${currentValue}`
    );
    if (currentValue > 10) {
        previousValue.push(currentValue);
    }
    return previousValue;
}, []);

console.log(greaterThan10);
//janet


//amrutha
//const powerOfTwo = numArr.reduce((acc, curr) => {
//     const squared = curr ** 2;
//     acc.push(squared);
//     console.log(acc);
//     return acc;
//   }, []);
  
//   console.log(powerOfTwo);
  //

// use reduce to create an array of numbers (use numsArr) to the power of 2

//oscar
const power2 = numsArr.reduce((acc, curr) => {
    acc.push(curr ** 2);
    return acc;
  }, []);
  console.log("power2: ", power2);
//oscar