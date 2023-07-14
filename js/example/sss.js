const user = 'remi';
const userSession = ['home', 'settings', 'home', 'about'];

const combine = (username, history) => {
    return {
        username,
        history,
    };
};
const userSession = combine(user, userSession);


const myFun = (arr) => {
    return arr.reduce((acc, value) => {
        return value ? ++acc : acc;
    }, 0);
}


const myFun2 = (arr) => {
    let count = 0;

    for(let i = 0; i< arr.length; ++i) {
        let current = arr[i];
        if (current === arr[i +1]) {
            ++count;

        } else {
            count;
        }
    }  return count;
};

const coach = {};
coach.name = 'Remi';
coach.age = 23;
coach.name = 'Calum';
coach.age += 7;

console.log(coach);

const input = {
    cat: 'fish',
    dog: 'beef',
    mouse: 'cheese'
};

const output = {
    fish:'cat',
    beef: 'dog',
    cheese : 'mouse'
};

const input = {
    cat: 'fish',
    dog: 'beef',
    mouse: 'cheese'
};

const output = ['CAT', 'DOG', 'MOUSE'];

const getBreeds = async () => {
    const response = await fetch('https://catfact.ninja/breeds');
    return await response.json();
}

const getBreeds = async () => {
    const responses = [];

    for(let i=1; i <4; ++i){
        const response = await fetch(`https=${i}`);
        responses.push(await response.json());

    }
    return responses;
};

getBreeds().then((data) => {
    console.log(data);
});

