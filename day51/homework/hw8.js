let cathetus1 = Number(prompt("შეიყვანე პირველი კათეტი:"));
let cathetus2 = Number(prompt("შეიყვანე მეორე კათეტი:"));

let hypotenuse = Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2));

if (hypotenuse > 10) {
    console.log("გრძელი სამკუთხედი");
} else {
    console.log("მოკლე სამკუთხედი");
}