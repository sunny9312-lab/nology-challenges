// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

function flipKeysAndValues(obj) {
    const entries = Object.entries(obj);
    console.log(entries, "entries");
    const flippedEntries = entries.map(entry => entry.reverse());
    console.log(flippedEntries, "flippedEntries");
    
    const output = Object.fromEntries(flippedEntries);
    console.log(output, "output");

    return output;
}

console.log(translate);
console.log(flipKeysAndValues(translate));

//kenny
// const swapKeys = (obj) => {
//     const keyArr = Object.keys(obj)
//     const valueArr = Object.values(obj)

//     return valueArr.reduce((result, value, index) => {
//         result[value] = keyArr[index]
//         return result
//     }, {})
// };
//kenny