let aaa = 30;

for (let i = 5; i <9; i++){
    aaa += 2;

}
console.log(aaa);

let newArr1 = new Array(100);

for (let i = 0; i < newArr1.length; i++) {
    newArr1[i] = 0;
}

console.log(newArr1);

// const arr3 = new Array(100).fill(0);
// console.log(arr3);


const userName = 'alex peter';
let response = " ";

if (userName.length < 6) {
     response = 'aaa';
} else if (userName.length > 24 ){
     response = 'bbb';
} else if (userName.match(/\W/)) {
     response = 'ccc';
}

console.log(response);

console.log(7 == '7');

if (8 && 7 === '7') {
    console.log('bacon');
} else if (7 === '7' || 8) {
    console.log('lettuce');
} else {
    console.log('tomato');
}


// const source = [1, 2, 3, 4, 5];
// const destination = [];

// for (let i=0; i<source.length; i++) {
//     destination.push(source[i] + 1);
// }
// console.log(destination);
//ysh
// const source = [1, 2, 3, 4, 5];
// const destination = source.map(function(element) {
//     return element + 1 ;
// });
// // console.log(destination);

// const source = [1, 2, 3, 4, 5];
// const destination = [];

// for (let i=0; i<source.length; ++i) {
//     const current = source[i] + 3;

//     if (current % 2 === 0) {
//     destination.push(current);
//     }
// }
// console.log(destination);

const source = [1, 2, 3, 4, 5];
const destination = source.map(function(element) {
    return element * 2;
}).filter(function(element) {
    return element % 2 === 0;
});

console.log(destination);

// const source = [1, 2, 3, 4, 5];
// const destination = source.filter(function(element) {
//     return element === 3;
// });

// console.log(destination);



let str = "";

for (let i = 0; i <10; ++i) {
    str += i;
}

console.log(str);

console.log("ba" + + "a") + "a".toLowerCase();


const arr = new Array(2).fill(null);
console.log(`Aspi${arr.pop() ?? "ra"}tions`);

const arr3 = new Array(100).fill(0);
console.log(arr3);

const person = {name: 'allen' };
console.log(`${('' + person.age).slice(4,6)}nance`);

const chars = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];
let i = 0;
let outputword = '';

while (i < chars.length) {
    output += String.fromCharCode(chars[i]);
    i++;
}

const expectedword = 'JavaScript';
console.log('Expected:' expectedword);
console.log('Actual :' outputword);
console.log(expectedword === output);

// const chars = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];
// let i = 0;
// let output = '';

// while (i++ <= chars.length) {
//     output += String.fromCharCode(chars[i]);
// }

// const expected = 'JavaScript';
// console.log('Expected:' expected);
// console.log('Actual :' output);
// console.log(expected === output);

