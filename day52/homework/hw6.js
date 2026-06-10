let number = Number(prompt("შეიყვანე რიცხვი:"));

if (!Number.isInteger(number) || number < 1 || number > 100) {
    console.log("არასწორი რიცხვი");
} else {
    console.log("სწორია");
}