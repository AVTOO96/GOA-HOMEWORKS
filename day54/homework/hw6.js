function getSquareRoot(num) {
    let result = num >= 0
        ? Math.sqrt(num)
        : "შეცდომა";

    console.log(result);
}

getSquareRoot(25);
let age = Number(prompt("შეიყვანე ასაკი:"));

let result = age >= 18 && age <= 60
    ? "დაშვებულია"
    : "არ არის დაშვებული";

console.log(result);
function nextLevel(score, hasKey) {
    let result = score >= 50 && hasKey
        ? "შემდეგი დონე გაიხსნა"
        : "დონე ჩაკეტილია";

    console.log(result);
}

nextLevel(60, true);
function findMin(a, b, c) {
    console.log(Math.min(a, b, c));
}

findMin(10, 5, 20);
let username = prompt("შეიყვანე სახელი:");
let password = prompt("შეიყვანე პაროლი:");

let result =
    username === "admin" && password === "12345"
        ? "წარმატებით შეხვედი"
        : "მონაცემები არასწორია";

console.log(result);