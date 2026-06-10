let a = Number(prompt("შეიყვანე პირველი კათეტი:"));
let b = Number(prompt("შეიყვანე მეორე კათეტი:"));

if (a > 0 && b > 0) {
    let c = Math.sqrt(a * a + b * b);
    console.log(c);
} else {
    console.log("არასწორი მონაცემები");
}