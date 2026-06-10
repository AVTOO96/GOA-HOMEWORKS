let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

let result = num2 && Math.round(num1 / num2);

if (result) {
    console.log(result);
} else {
    console.log("ნულზე გაყოფა არ შეიძლება");
}