// Level 56


// 1. ფერების პალიტრა (push)

let colors = ["წითელი", "მწვანე"];

colors.push("ლურჯი");

console.log(colors);


// 2. მუსიკალური ფლეილისტი (pop)

let playlist = ["Song 1", "Song 2", "Song 3"];

playlist.pop();

console.log(playlist);


// 3. რიცხვების ზრდა (push + length)

let numbers = [10, 20, 30];

numbers.push(40, 50);

console.log(numbers.length);


// 4. ქალაქების სია (pop)

let cities = ["თბილისი", "ბათუმი", "ქუთაისი"];

let removedCity = cities.pop();

console.log(removedCity);


// 5. ცხოველების თავშესაფარი (prompt + push)

let animals = [];

let animal1 = prompt("შეიყვანე პირველი ცხოველი:");
let animal2 = prompt("შეიყვანე მეორე ცხოველი:");

animals.push(animal1, animal2);

console.log(animals);


// 6. უკუღმა გადაადგილება (pop + push)

let stack = ["A", "B", "C"];
let reversed = [];

let removed = stack.pop();

reversed.push(removed);

console.log(reversed);


// 7. კალათბურთის გუნდი (if + pop/push)

let team = ["გიორგი", "ლუკა", "ნიკა", "დათო"];

if (team.length > 3) {
    team.pop();
} else {
    team.push("გია");
}

console.log(team);


// 8. ბანკომატის ისტორია (prompt + if + push/pop)

let transactions = [100, -50, 200];

let money = Number(prompt("შეიყვანე თანხა:"));

if (money > 0) {
    transactions.push(money);
} else if (money < 0) {
    transactions.pop();
}

console.log(transactions);


// 9. საწყობის ინვენტარი (push + if + pop)

let warehouse = ["მაგიდა", "სკამი"];

warehouse.push("კარადა");

let isFull = false;

if (warehouse.length === 3) {
    isFull = true;
    warehouse.pop();
}

console.log(warehouse);
console.log(isFull);