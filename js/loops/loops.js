//for loop
//2. 
console.log(1);
console.log(2);

for (let i = 0; i < 6; i++) {
    console.log(i, "from the for");
}

//while loop
let i = 1;
while (i < 6) {
    console.log(i, "from the while");
    i++;
  }

let num = Math.ceil(Math.random() * 10);
console.log(num);

while(num !== 5){
    console.log(`the random is ${num}`);
    num = Math.ceil(Math.random() * 10);
}

console.log(num);
