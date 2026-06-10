let side = Number(prompt("შეიყვანე კვადრატის გვერდის სიგრძე:"));
let area = Math.pow(side, 2);

if (area > 100) {
    console.log("დიდი ფართობი");
} else {
    console.log("პატარა ფართობი");
}