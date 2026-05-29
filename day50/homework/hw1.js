// 1. Math.random() – შემთხვევითი ათწილადი რიცხვი 0-დან 10-მდე

function randomNumber() {
    return Math.random() * 10;
}

console.log(randomNumber());


// 2. Math.floor() – ქვემოთ დამრგვალება

let num1 = 5.99;
console.log(Math.floor(num1)); // 5


// 3. Math.ceil() – ზემოთ დამრგვალება

let boxes = 4.1;
console.log(Math.ceil(boxes)); // 5


// 4. Math.round() – მათემატიკური დამრგვალება

function roundNumber(num) {
    return Math.round(num);
}

console.log(roundNumber(2.4)); // 2
console.log(roundNumber(2.5)); // 3


// 5. Math.sign() – რიცხვის ნიშანი

let balance1 = 500;
let balance2 = -200;
let balance3 = 0;

console.log(Math.sign(balance1)); // 1
console.log(Math.sign(balance2)); // -1
console.log(Math.sign(balance3)); // 0


// 6. Math.pow() – კუბის მოცულობა

let side = 5;
let volume = Math.pow(side, 3);

console.log(volume); // 125


// 7. Math.max() – ყველაზე დიდი რიცხვი

console.log(Math.max(12, 45, 7, 89, 23)); // 89