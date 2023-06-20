// 1
const movie = {
    title: "Dead Poets Society",
    yearReleased: 1989,
    director: "Peter Weir",
    genre: ["Drama", "Teen", "Comedy"],
};

// Using object destructuring, create a function that returns a string that says what the title and the genres of the passed object are.

// @param {title: string, yearReleased: number, director: string, genres: string[]}

// @returns 'The genres of the movie title are genre1, genre2'

const getTitleAndGenre = (obj) => {};
//ysh
//const genresString = genre.join(', ');
//ysh
// checking if returned the right value
console.log(getTitleAndGenre(movie));

//janet
const getTitleAndGenre = (obj) => {

    const { title, genre } = obj;
    let genreList = genre.join(', ');

    return `The genres of ${title} are ${genreList}`;
};
//janet

// 2
const recipe = {
    name: "Spaghetti Bolognese",
    country: "Italy",
    isVegetarian: false,
    mealIngredients: [
        "Minced beef",
        "tomato sugo",
        "basil",
        "onion",
        "garlic",
        "parmesan",
    ],
};

// Using object destructuring, create a function that renames the key of an object. It should not modify the original object.

// @param {name: string, country: string, isVegetarian: boolean, mealIngredients: string[]}
// @returns {name; string, country: string, isVegetarian: boolean, ingredients: string[]}

// const renameKey = (obj) => {};

// console.log(renameKey(recipe));
//oscar
const renameKey = (obj, keyToRename, newKey) => {
    const { [keyToRename]: value, ...rest } = obj; //use computed property name to pass value instead of defining new key "keyToRename"
    const newObj = { [newKey]: value, ...rest };
    return newObj;
  };
  
  console.log(renameKey(recipe, "mealIngredients", "ingredients"));
//oscar

// 3

const codingSchool = {
    name: "_nology",
    languages: ["JavaScript", "Java"],
    offices: [
        {
            country: "Australia",
            city: "Sydney",
        },
        {
            country: "UK",
            city: "Bristol",
        },
    ],
};

// Using destructuring, create a function that returns the city of the first office of the given company

// @param {name: string, languages: string[], offices: {country: string, city: string}[]}

// @returns {string}  the name of the city of the first office

// const returnFirstCity = (obj) => {};

// console.log(returnFirstCity(codingSchool));
//mateo
const returnFirstCity = (obj) => {
    const { offices } = obj;
    return offices[0].city 
};
//mateo
//jack
// const returnFirstCity = (obj) => {
//     const { offices, ...rest } = obj;
//     const [first] = offices;
//     const { city, ...rest2 } = first;
//     return city;
//    };
//    console.log(returnFirstCity(codingSchool));
//jack
// 4

const postsArray = [
    {
        id: 123,
        createdBy: "user16",
        commentNo: 5,
    },
    {
        id: 456,
        createdBy: "user20",
        commentNo: 5,
    },
    {
        id: 789,
        createdBy: "user32",
        commentNo: 5,
    },
];



// given an array of post objects create a function that returns a new array of posts, each object in the new array should have keys renamed as per the example.

// @param {{id: number, createdBy: number, commentNo: number}[]}

// @returns {{postId: number, creator: number, postComment: number}[]}
const newPostArr = (arr) => {
//jungah
    return arr.map((obj) => {
        const { id, createdBy, commentNo } = obj;
        return { postId: id, creator: createdBy, postComment: commentNo };
    });
//jungah
};

console.log(newPostArr(postsArray));

// 5
const forecast = {
    yesterday: { low: 14, high: 32 },
    today: { low: 18, high: 34 },
    tomorrow: { low: 20, high: 28 },
};

// using object destructuring, create a function that returns the value of the low temperature for today

// @param { yesterday: { low: number, high: number }, today: { low: number, high: number }, tomorrow: { low: number, high: number } }

// return {number} the value of the low temperature for today
// const getTodayLow = (obj) => {
// };

//kenny
const getTodayLow = (obj) => {
    const {today, ...rest} = obj 
    const {low, ...todayRest} = today
    return `${low} the value of the low temperature for today`
};
//kenny


console.log(getTodayLow(forecast));
