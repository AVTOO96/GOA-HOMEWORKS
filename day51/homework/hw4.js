let balance = Number(prompt("შეიყვანე თქვენი საბანკო ბალანსი:"));

let result = Math.sign(balance);

if (result === -1) {
    console.log("თქვენ გაქვთ დავალიანება");
} else if (result === 0) {
    console.log("თქვენი ბალანსი ნულია");
} else {
    console.log("თქვენს ანგარიშზე არის თანხა");
}