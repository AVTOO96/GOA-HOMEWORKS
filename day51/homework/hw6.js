let hp1 = Number(prompt("შეიყვანე პირველი მებრძოლის HP:"));
let hp2 = Number(prompt("შეიყვანე მეორე მებრძოლის HP:"));

let maxHP = Math.max(hp1, hp2);

if (maxHP < 50) {
    console.log("ორივე მებრძოლი სუსტია");
} else {
    console.log(maxHP);
}