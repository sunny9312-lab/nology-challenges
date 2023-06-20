const checkIfAllowd = (age, country, levelOfDrunk) => {
    return ();

    if(age >= 21 && levelOfDrunk <= 3) {
        return true;

    }

    if (age >= 18 && levelOfDrunk <= 3 && country !== "USA"){
        return true;
    }
    if (age < 18 || levelOfDrunk > 3){
        return false;
    }
}

console.log(checkIfAllowd(21, "UK", 2)) //-> TRUE
console.log(checkIfAllowd(21, "UK", 2)) //-> TRUE
console.log(checkIfAllowd(18, "USA", 2)) //-> TRUE
console.log(checkIfAllowd(12, "USA", 2)) //-> TRUE

const form = document.querySelector(".form");
console.log(form);
console.dir(form);

form.addEventListener("submit", (event) => {
    console.log("submitted form");
    event.preventDefault();
})


