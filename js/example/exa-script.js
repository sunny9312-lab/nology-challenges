const form = document.querySelector("form");

const data = [
    { content: "The weather in Melbourne today is 12 degreess" },
    { content: "FC Barcelona won the world cup" },
    { content: "Recipe for spaghetti bologenese" },
];

const dataFROMUSER = document.querySelector("input");

const objToDisaply = data.find((el) => el.content.includes(dataFROMUSER.value));

document.querySelector("#searchResult").innerText = objToDisaply.content;

document.querySelector("#searchResult").innerText = "";