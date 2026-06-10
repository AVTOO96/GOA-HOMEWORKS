let age = Number(prompt("შეიყვანე ასაკი:"));
let isStudent = prompt("სტუდენტი ხარ? (true/false)") === "true";

let price = isStudent || age < 18 ? 10 : 15;

console.log(price);