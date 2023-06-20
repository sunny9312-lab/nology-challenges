const numbersToFilter = [12, 45, 62, 57];

const evenNums = numbersToFilter.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(evenNums, "even numbers");

//
const arrOfCodes = [114, 101, 100, 117, 99, 101];

const codesToLetters = arrOfCodes.reduce((acc, curr) => {
    console.log({ acc: acc, charCodeFromCurr : String.fromCharCode(curr),});

    return acc + String.fromCharCode(curr);
}, [] ); 

console.log(codesToLetters, "codes to letter");

//roche
// const arrOfCodes = [114, 101, 100, 117, 99, 101];
// const codesToLetters = arrOfCodes.reduce((acc, curr) => {
//     console.log({ acc: acc, charCodeFromCurr : String.fromCharCode(curr)});
//     return acc + String.fromCharCode(curr);
// },"");
// console.log(codesToLetters, "codes to letter");
//roche

// const lettArr = ["c", "h", "e", "e", "s", "e"];
// //kai
// const sumOfCodes = lettArr.reduce((acc, curr) => acc + curr.charCodeAt(), 0);

// console.log(sumOfCodes, "- sum of the character codes");
//kai
//->621

// const arr1 = ["a", "b", "c"]
// const sumOfArr1 = arr1.reduce((acc, curr) => acc + curr.charCodeAt(), 0);
// console.log(arr1[0].charCodeAt(), "a character codes");
// console.log(sumOfArr1, "sum of the character codes");

//amrutha
const lettArr = ["c", "h", "e", "e", "s", "e"];
const sumOfCodes = lettArr.reduce((acc, curr) => {
    const charCode = curr.charCodeAt(0);
    return acc + charCode;
  }, 0);
  
  console.log(sumOfCodes);
  //amrutha
  
  const numsArr = [1, 345, 545, 2, 5, 7, 907];
  //oscar
  const power2 = numsArr.reduce((acc, curr) => {
    acc.push(curr ** 2);
    return acc;
  }, []);
  console.log("power2: ", power2);

  // use reduce to filter an array to only get numbers greater than 10

// const numsArr = [1, 345, 545, 2, 5, 7, 907];
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