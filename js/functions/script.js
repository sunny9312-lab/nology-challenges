// 1. What are functions?
// blocks of code that perform a certain task, that we can reuse

// writing instructions of what we want to happen, giving them a name

// every time we call the function (use the function), we run those instructions

// 2. Why do we need functions?
// to avoid repeating code, to avoid bugs

const student1 = "Jane";
const student2 = "John";
const student3 = "Kate";

console.log(`Hello, my name is ${student1}`);
console.log(`Hello, my name is ${student2}`);
console.log(`Hello, my name is ${student3}`);

function introduceYourself(name) {
    // do something with the data
    const introductionStr = `Hello, my name is ${name}`;
    // return an output (some other data)
    return introductionStr;
}

console.log(introduceYourself(student1));
console.log(introduceYourself(student2));
console.log(introduceYourself(student3));
console.log(introduceYourself("Martyna"));

// parameters are optional

// function that returns the date
// in js I have a Date object

function getCurrentDate() {
    const today = new Date();
    return today.toDateString();
}

console.log(getCurrentDate());

// we can have functions that don't use the return keyword
console.log(printSomething("I was called before function was declared"));

function printSomething(something) {
    // this is a side effect
    console.log(something);
    // if I get rid of the return keyword, the function will return the default value, which is undefined
    return something;
}

printSomething("Hi");
// what did this function return?
console.log(printSomething("Hello"));

const myFunctionReturnedThis = printSomething("nology");
console.log(myFunctionReturnedThis, "returned value");

// different syntax for a function - arrow functions

// THIS WOULD NOT WORK < CANNOT ACCESS ARROW FUNCTIONS BEFORE THEY ARE INITIALIZED
// const calculatedArea = rectangleArea(4, 5);
// console.log(calculatedArea);

const rectangleArea = (width, height) => {
    return width * height;
};

const calculatedArea = rectangleArea(4, 5);
console.log(calculatedArea);

// in certain situations, when using arrow functions, we can skip the {} and return, it's implied that the function returns the value after the arrow
// ! ONLY POSSIBLE FOR ONE LINE FUNCTIONS
const shorterArea = (width, height) => width * height;

// shorterArea = 2;
const shorterCalcArea = shorterArea(2, 3);
console.log(shorterCalcArea);

// function declarations are hoisted, we can use them before tey are declared

//ysh-coding angma

function sayHello(name){
    
    // const msg = `hello, ${name}`;
    // console.log(msg);
    let msg = 'Hello';
    if (name){
        msg += `, ${name}`;
        // msg += ', ' + name;
    }
    console.log(msg);
}

sayHello('Mike');
sayHello('Joanne');
sayHello();

let name1 = "Mike";

function sayHello1(name1){
    console.log(name1)
}

sayHello1();
sayHello1('Jane');

function sayHello2(name2){    //function sayHello2(name2 = 'friend'){  라고
                            // 디폴트 값을 name2에 줘도 된다.
    let newName = name2 || 'friend'; //name2가 false가 되니까 or연산자이므로 friend로 찍힌다.  
    let msg = `Hello, ${newName}`
    console.log(msg)
}

sayHello2();   //name2 가 아무것도 없으므로 
sayHello2('Jane');


function add(num1, num2){
    return num1 + num2;
}

const result = add(2,3);
console.log(result)

function showError(){
    console.log('there is error');
}
const result3 = showError();
console.log(result3);     //리턴문이 없는 함수를 호출하면-> undefined가 출력이 
                         // 된다. 


//화살표 함수 arrow function
// let add = function(num11, num12){
//     return num11 + num12;
// }
let add = (num11, num12) => {
    return num11 + num12;
}
//ysh-coding angma
