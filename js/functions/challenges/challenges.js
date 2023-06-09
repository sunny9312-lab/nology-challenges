// # Function Challenges

// ## Challenge: Calculating Moon Orbits

// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.

// ``` 
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// ```
// const moonOrbitsNumber = 27;

// function moonOrbit(){

// }
// console.log(moonOrbit());

// const moonOrbits = (width, height) => width * height;

// // shorterArea = 2;
// const shorterCalcArea = shorterArea(2, 3);
// console.log(shorterCalcArea);

//
// # Function Challenges

//^ 1. ## Challenge: Calculating Moon Orbits

// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.

// ```
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// ```
// const earthDays = 54;
// const moonOrbits = (earthDays) => earthDays / 27;
// console.log(moonOrbits(earthDays));
// console.log(moonOrbits(365));

// k
// const moonOrbits = (earthDays) => earthDays / 27;
// console.log(moonOrbits(54));
// console.log(moonOrbits(365));

const moonOrbits = function (earthDays) {
    const moonOrbitPeriod = 27;
    const totalOrbits = earthDays / moonOrbitPeriod;
    return earthDays % moonOrbitPeriod === 0 ? totalOrbits : totalOrbits.toFixed(3);
}

console.log(moonOrbits(54));

const circleArea = (r) => {
    return (Math.PI * (r ** 2)).toFixed(2)
}

const circlePerimeter = (r) => {
    return (2 * Math.PI * r).toFixed(2)
}

console.log(circleArea((2)));
console.log(circlePerimeter((2.6)));

//
const ageInDays = (age) => {
    return age * 365;
  }
  
  console.log(ageInDays(27));
  
  const ageInSeconds = (age) => {
    return age * 31536000;
  }
  
  console.log(ageInSeconds(27));

  //
  console.log("Challenge 4: ");
  const remainder = (num1, num2) => num1 % num2;
  
  console.log("remainder(1, 3) = " + remainder(1, 3));
  console.log("remainder(3, 4) = " + remainder(3, 4));
  console.log("remainder(-9, 45) = " + remainder(-9, 45));
  console.log("remainder(5, 5) = " + remainder(5, 5));

  //
  function basketballPoints(numOf2Pointers, numOf3Pointers) {
    const totalPoints = (numOf2Pointers * 2) + (numOf3Pointers * 3);
    return totalPoints;
}

console.log(basketballPoints(3 , 2));
console.log(basketballPoints(5 , 6));
console.log(basketballPoints(2 , 1));

//kai 
const lessThan100 = (num1, num2) => {
    const sumOfNums = num1 + num2;
    if (sumOfNums < 100) {
        return true;
    } else {
        return false;
    }
};

//martina recommend this way
// const anotherlessthan100 = (num1, num2) ==> num1 + num2 < 100;

console.log(lessThan100(22, 15)); // true
console.log(lessThan100(83, 34)); // false (117)
console.log(lessThan100(3, 77)); // true

