// 1. What are array iterators?
// built in methods/functions we can call on arrays that operate on each individual element of that array

// 2. Why should we use them?

// a lot less syntax to write, easier to read, easier to debug, less chance of making errors/creating bugs, indexes will be dealt with for us

// MAP

// What are callback functions?

// in js, a function is  a value, which means we pass it as parameter to a different function

function add(num1, num2) {
    console.log(`add function, num1 is ${num1}, num2 is ${num2}`);
    return num1 + num2;
}

const subtract = (a, b) => {
    console.log(`subtract, a is ${a}, b is ${b}`);
    return a - b;
};

function doMath(x, y, callback) {
    return callback(x, y);
}

console.log(doMath(2, 5, add));
console.log(doMath(10, 3, subtract));

// map takes a callback function as a parameter

// I have an array, I want a new array with every element incremented by 1

const numbers = [1, 2, 3, 4, 5, 6];

// I need to create a new array
const incrementedNums = [];

// I need to get the loop logic right, deal with indexes, make sure it's not an infinite loop
for (i = 0; i < numbers.length; i++) {
    incrementedNums.push(numbers[i] + 1);
}

console.log(incrementedNums);

// map is a method that returns a new array - no need to create an empty one, push to it like with a for loop

// map is an iterator - it will run on every element of my array, no need to write the logic myself

// map takes in a callback function

function addOne(num) {
    return num + 1;
}

const incrementedWIthMap = numbers.map(addOne);
console.log(incrementedWIthMap, "numbers incremented with map");

// I want a new array with numbers to the power of 2

function squareNum(num) {
    return num ** 2;
}

const numsSqure = [];
for (let i = 0; i < numbers.length; i++) {
    numsSqure.push(squareNum(numbers[i]));
}
console.log(numsSqure);

// map returns a new array of the same length - run the callback on every element

const squareNumWithMap = numbers.map(squareNum);
console.log(squareNumWithMap, "square nums array with map");

// I want a new array with double numbers
function doubleNum(num) {
    return num * 2;
}

const doubleArr = numbers.map(doubleNum);
console.log(doubleArr);

const anotherDoubleNums = numbers.map((apple) => {
    // here I need to write what I want to do with each element
    // I need to return it
    console.log(
        apple,
        "this is the first parameter of the callback, it is each element of teh array, starting at the first one"
    );
    return apple * 2;
});

console.log(anotherDoubleNums, "double numbers with map");

// we know tat with arrow functions we can skip {} and return if it's a one line function
const oneLineDoubleNums = numbers.map((num) => num * 2);
console.log(oneLineDoubleNums);

// You have an array of names all in lowercase you want a new array with all names but uppercase

const arr1 = ["ella", "kate", "john"];
const newArr1 = [];

// I need to get the loop logic right, deal with indexes, make sure it's not an infinite loop
//sunny
// for (i = 0; i < arr1.length; i++) {
//     newArr1 += arr1.toUpperCase(arr1[i]);
// }
// console.log(newArr1);

//amrutha
const names =['jack','rachel','bella','anna'];

function upperCaseName(names){
    return names.toUpperCase();
}
const Names = names.map(upperCaseName);
console.log(Names);
//amrutha 2
// const lowercaseNames = ["john", "jane", "adam", "emma"];

// const uppercaseNames = lowercaseNames.map(name => name.toUpperCase());
// console.log(uppercaseNames);
// You have an array of numbers, you want a new array with each number decremented by 5
//mateo 
//
const numbers2 = [10, 9, 8, 7, 6,];

const newNumbers = numbers2.map(num => num - 5);
console.log(newNumbers);

//
