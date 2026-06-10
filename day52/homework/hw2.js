let age = Number(prompt("შეიყვანე ასაკი:"));

if (age > 0 && age <= 12) {
    console.log("ბილეთის ფასი: 5 ლარი");
} else if (age > 12 && age < 60) {
    console.log("ბილეთის ფასი: 10 ლარი");
} else if (age >= 60) {
    console.log("ბილეთის ფასი: 7 ლარი");
} else {
    console.log("არასწორი ასაკი");
}