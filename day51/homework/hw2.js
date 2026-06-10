let seatNumber = Number(prompt("შეიყვანე ადგილის ნომერი:"));

if (seatNumber <= 0) {
    console.log("არასწორი ადგილი");
} else {
    let row = Math.ceil(seatNumber / 5);
    console.log("თქვენ ხართ " + row + "-ე რიგში");
}