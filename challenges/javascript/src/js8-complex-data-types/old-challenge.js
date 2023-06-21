/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  //ysh
  
  //ysh
  //kai
  export const getEmployeeQuotes = (employeeArr) => {
    const quoteArr = employeeArr.map((employee) => employee.quote);
    return quoteArr;
};
//kai
  // Write code here
};

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  // Write code here
  const manager = employeeArr.map((employee) => employee.isManagement);
  if (manager) {
    return employeeArr
  }
  };
  //ask Jungah 내가 했는게 어떤 부분이 잘못이해 하고 있는지...

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object) => {
  // Write code here
  const key = object.key
  return key
//이 부분도 정아씨 한테 물어볼것  
  };
  //ysh
  
/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr) => {
  // Write code here
  const itemPrice = shoppingBasketArr.price
  if itemPrice > // 전에 아이템이랑 비교해서 for문을 돌려야 하나요? 
  // reduce문으로..
  return shoppingBasketArr.reduce((acc, curr) => {
    if (acc.price > curr.price) {
      return acc;
    } else {
      return curr
    }
  });

};  //나는 이것은 이해가 되는데, 샘이 보여준 정답에 두번재 세번째는 잘 이해가 않됨니다..


/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  // Write code here
  //jungah
  const { price, quantity } = item;
    return { ...item, totalPrice: price * quantity };
return shoppingBasketArr.map((item) => {
    const { price, quantity } = item;
    return { ...item, totalPrice: price * quantity };
  });
  //jungah
};
//ysh
export const settotalPrice = (shoppingBasketArr) => {
  const itemQuantity = shoppingBasketArr.quantity;
  const itemPrice = shoppingBasketArr.price;
  const totalPrice = itemQuantity * itemPrice;
  //push하나요? 여기서? 
  return [shoppingBasketArr, totalPrice]


};
//ysh

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  //ysh
  return shoppingBasketArr.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  });
  //ysh
};

export const totalShoppingBasket = (shoppingBasketArr) => {
  //keeran
  return shoppingBasketArr.reduce((accum, curr) => {
    return accum + curr.totalPrice;
  }, 0);   //질문: 여기서 0은 accur디폴트 값인가요? 않줘도 되나요? 문법에서..
  //초기값--0 정아씨가 얘기해줌

  //keeran

  // Write code here
};
/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  //oscar
 
    const cleanMealArr = mealsArr.map((meal) => {
      const { timeStamp, userCreated, ...rest } = meal;
      const cleanMeal = { ...rest };
      return cleanMeal;
    });
    return cleanMealArr;
   //oscar
//잘 이해는 되는데, 문제가 이해는 되는데.. 문법 구문쓰는것.. 어디서 볼수 있는지? 
  // Write code here
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  //keeran
  return mealsArr.map(meal => {
    const retMeal = { ...meal };

    const mealKeys = Object.keys(meal);
    if (!mealKeys.includes("isVegetarian")) retMeal.isVegetarian = false;
    if (!mealKeys.includes("timeToCook")) retMeal.timeToCook = 15;

    return retMeal;
  });
  //keeran   //문제도 풀이도 잘 이해가 않됨
  // Write code here
};

/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {
  //jack
  return cocktailData.map((cocktailObj) => {
    const {
     idDrink,
     strDrink,
     strCategory,
     strAlcoholic,
     strInstructions,
     ...rest
    } = cocktailObj;
    const ingredientsArr = Object.values(rest).filter(
     (ingredient) => ingredient
    );
    return {
     id: idDrink,
     drink: strDrink,
     category: strCategory,
     alcoholic: strAlcoholic,
     instructions: strInstructions,
     ingredients: ingredientsArr,
    };
   });
  //jack
  // Write code here
};
