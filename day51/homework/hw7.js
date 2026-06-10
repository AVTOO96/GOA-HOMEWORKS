let price1 = Number(prompt("შეიყვანე პირველი მაღაზიის ფასი:"));
let price2 = Number(prompt("შეიყვანე მეორე მაღაზიის ფასი:"));
let price3 = Number(prompt("შეიყვანე მესამე მაღაზიის ფასი:"));

let minPrice = Math.min(price1, price2, price3);

if (minPrice < 10) {
    console.log("ძალიან იაფია!");
} else {
    console.log(minPrice);
}