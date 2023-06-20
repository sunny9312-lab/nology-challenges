3. inga
const namePosessions = possessionsArr.map((item) => {return (`${name} ${item}`)})
  return namePosessions;

2. sunpreet
export const createPercentageList = (numbersArr) => {
  let newNumbersArr = numbersArr.map((number) => number * 100 + "%");
 return newNumbersArr;
};

1. amrutha
const booleanArr = [true, true, false, false, true];
export const removeFalseValues = (booleanArr) => {
  return booleanArr.filter(value => value);
}

4. jack
if (numberString.includes("+")) {
  let numberArr = numberString.split("+");
  let parsedIntArr = numberArr.map((numberStr) => parseInt(numberStr));
  return parsedIntArr;
 } else {
  let numberArr = [];
  numberArr.push(numberString);
  let parsedIntArr = numberArr.map((numberStr) => parseInt(numberStr));
  return parsedIntArr;
 }

5. oscar
export const createOddEvenArray = (numberString) => {
    const numbers = convertStringToNumbersArray(numberString);
    const resultArr = numbers.map((num) => {
      if (num % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
    return resultArr;
  };

6. jungah
return booksArr.filter((book) => book.includes(searchTerm));

mateo 
for each -> map itereator 사용한다


kenny
export const formatString = (string) => {
    let cleanString = string.replace(/[^a-zA-Z]/gi, '').split('')
    return cleanString.reduce((result, letter , index)=> {
      index % 2 === 0 ? result.push(letter.toUpperCase()) : result.push(letter.toLowerCase())
      return result
    }, [])
  };

  EXPERT CHALLNGE- KENNY
  export const fizzBuzz = (mixedArray) => {
    let cleanArray = mixedArray.filter(element => element > 0 || Number(element) > 0)
    return cleanArray.reduce((result, number) => {
      if ( Number(number) % 15 == 0) {
        result.push('FizzBuzz')
      } else if (Number(number) % 3 == 0) {
        result.push('Fizz')
      } else if (Number(number) % 5 == 0) {
        result.push('Buzz')
      } else {
        result.push(`${number}`)
      }
      return result
    } ,[])
  };
