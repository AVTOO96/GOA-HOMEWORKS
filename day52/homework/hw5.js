let score = Number(prompt("შეიყვანე ქულა:"));
let code = prompt("შეიყვანე კოდი:");

let finalScore = (code === "BONUS") && Math.pow(score, 2) || score;

console.log(finalScore);