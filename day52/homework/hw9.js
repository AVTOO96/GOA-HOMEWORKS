let price1 = Number(prompt("პირველი ფასი:")) || Infinity;
let price2 = Number(prompt("მეორე ფასი:")) || Infinity;
let price3 = Number(prompt("მესამე ფასი:")) || Infinity;

console.log(Math.min(price1, price2, price3));