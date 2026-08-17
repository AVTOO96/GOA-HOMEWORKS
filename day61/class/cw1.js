// for...in - გამოიყენება ობიექტის key-ების (გასაღებების) გადასავლელად.

// for...of - გამოიყენება მასივის ან სხვა iterable ობიექტის მნიშვნელობების გადასავლელად.

// while - ციკლი მუშაობს მანამ, სანამ მოცემული პირობა true-ია.

// do...while - ჯერ ერთხელ მაინც ასრულებს კოდს და შემდეგ ამოწმებს პირობას.

// break - ციკლს ან switch-ს ვადაზე ადრე აჩერებს.




let pinCode = "1234";

let userPin;

while (userPin !== pinCode) {
    userPin = prompt("შეიყვანეთ პინკოდი:");

    if (userPin !== pinCode) {
        alert("პაროლი არასწორია!");
    } else {
        alert("პაროლი სწორია!");
    }
}





let fruits = ["ვაშლი", "ბანანი", "ატამი"];

for (let fruit of fruits) {
    console.log(`მე მიყვარს ${fruit}`);
}





let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}