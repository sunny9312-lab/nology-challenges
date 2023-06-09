// # Function Challenges

//^ 1. ## Challenge: Calculating Moon Orbits

// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.

// ```
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359
// ```

const moonOrbits = (earthDays) => earthDays / 27.32240437;
console.log(moonOrbits(54).toFixed(1));
console.log(moonOrbits(365));

//^ 2. ## Challenge: Working with Circles

// MVP
// Write a function that takes the radius of a circle and return its area.

// ```
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83
// ```

const circleArea = (radius) => {
    return (Math.PI * radius ** 2).toFixed(2);
};

console.log(circleArea(10)); // 314.16

// Write a function that takes the radius of a circle and return its perimeter.

const circlePerimeter = (radius) => {
    return (2 * Math.PI * radius).toFixed(2);
};

console.log(circlePerimeter(10)); // 62.83

//^ 3. ## Challenge: Years to Days & Seconds

// MVP
// Create a function that takes your age in years and returns your age in days.

function ageInDays(ageInYears) {
    return ageInYears * 365;
}

console.log(ageInDays(32));

// Create a function that takes your age in years and returns your age in seconds.

const ageInSeconds = (ageInYears) => ageInDays(ageInYears) * 24 * 60 * 60;

console.log(ageInSeconds(32));

// ```
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000
// ```

//^ 4. ## Challenge: Return the Remainder from Two Numbers

// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

const remainder = (num1, num2) => num1 % num2;

console.log(remainder(1, 3)); // 1
console.log(remainder(3, 4)); // 3
console.log(remainder(-9, 45)); // -9
console.log(remainder(5, 5)); // 0

// ```
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// ```

//^ 5. ## Challenge: Basketball Points

// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

const totalPointsScored = (twoPointers, threePointers) => {
    return twoPointers * 2 + threePointers * 3;
};

console.log(totalPointsScored(10, 20)); // 80
console.log(totalPointsScored(5, 5)); // 25

//^ 6. ## Challenge: Less Than 100?

// MVP
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// ```
// lessThan100(22, 15) ➞ true
//  22 + 15 = 37

// lessThan100(83, 34) ➞ false
//  83 + 34 = 117

// lessThan100(3, 77) ➞ true
// ```

const lessThan100 = (num1, num2) => {
    const sumOfNums = num1 + num2;
    if (sumOfNums < 100) {
        return true;
    } else {
        return false;
    }
};

console.log(lessThan100(22, 15)); // true
console.log(lessThan100(83, 34)); // false (117)
console.log(lessThan100(3, 77)); // true

//janet
const moonOrbits = function (earthDays) {
    const moonOrbitPeriod = 27;
    const totalOrbits = earthDays / moonOrbitPeriod;
    return earthDays % moonOrbitPeriod === 0 ? totalOrbits : totalOrbits.toFixed(3);
}

console.log(moonOrbits(54));
//matheus
const circleArea = (r) => {
    return (Math.PI * (r ** 2)).toFixed(2)
}

const circlePerimeter = (r) => {
    return (2 * Math.PI * r).toFixed(2)
}

console.log(circleArea((2)));
console.log(circlePerimeter((2.6)));
//
//jack
const ageInDays = (age) => {
    return age * 365;
  }
  
  console.log(ageInDays(27));
  
  const ageInSeconds = (age) => {
    return age * 31536000;
  }
  
  console.log(ageInSeconds(27));

  //oscar
  console.log("Challenge 4: ");
const remainder = (num1, num2) => num1 % num2;

console.log("remainder(1, 3) = " + remainder(1, 3));
console.log("remainder(3, 4) = " + remainder(3, 4));
console.log("remainder(-9, 45) = " + remainder(-9, 45));
console.log("remainder(5, 5) = " + remainder(5, 5));

// roche
function basketballPoints(numOf2Pointers, numOf3Pointers) {
    const totalPoints = (numOf2Pointers * 2) + (numOf3Pointers * 3);
    return totalPoints;
}

console.log(basketballPoints(3 , 2));
console.log(basketballPoints(5 , 6));
console.log(basketballPoints(2 , 1));

// kai
const lessThan100 = (num1, num2) => {
    const sumOfNums = num1 + num2;
    if (sumOfNums < 100) {
        return true;
    } else {
        return false;
    }
};

console.log(lessThan100(22, 15)); // true
console.log(lessThan100(83, 34)); // false (117)
console.log(lessThan100(3, 77)); // true