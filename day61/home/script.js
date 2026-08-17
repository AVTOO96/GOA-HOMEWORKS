// 1. ლუწი რიცხვების ბეჭდვა (for loop)

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


// 2. რიცხვების კლება (while loop)

let count = 10;

while (count > 0) {

    console.log(count);

    count--;

}


// 3. პაროლის მოთხოვნა (do...while loop)

let password;

do {
    password = prompt("შეიყვანე პაროლი:");
} while (password !== "secret");

console.log("სწორი პაროლია!");


// 4. მასივის ელემენტების ბეჭდვა (for...of loop)

let fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი"];

for (let fruit of fruits) {

    console.log(fruit);

}


// 5. ობიექტის თვისებების ბეჭდვა (for...in loop)

let car = {
    brand: "Toyota",
    model: "Prius",
    year: 2020
};


for (let key in car) {

    console.log(key + ":", car[key]);

}


// 6. მასივიდან რიცხვების ჯამი (for...of loop)

let numbers = [10, 20, 30, 40];

let sum = 0;


for (let number of numbers) {

    sum += number;

}


console.log("ჯამი:", sum);