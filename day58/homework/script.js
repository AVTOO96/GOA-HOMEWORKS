// 1. ლუწი რიცხვების გაფილტვრა

const findEvenNumbers = (numbers) => {
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    return evenNumbers;
};

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// 2. სახელი სიაშია?

let students = ["ანი", "ლუკა", "ნიკო"];

const checkStudent = (name) => {
    if (students.includes(name)) {
        console.log("სტუდენტი ნაპოვნია");
    } else {
        console.log("სტუდენტი არ არის სიაში");
    }
};

checkStudent("ლუკა");


// 3. უარყოფითი რიცხვების მოშორება

let numbers = [10, -5, 20, -3, 30, -12];

let cleanNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        cleanNumbers.push(numbers[i]);
    } else {
        console.log("წაიშალა:", numbers[i]);
    }
}

console.log(cleanNumbers);


// 4. კალათის სრული ფასი

const totalPrice = (prices) => {
    let sum = 0;

    if (prices.length > 0) {
        for (let i = 0; i < prices.length; i++) {
            sum += prices[i];
        }
    } else {
        console.log("კალათა ცარიელია");
    }

    return sum;
};

console.log(totalPrice([100, 50, 200]));


// 5. ტექსტური მასივის გაერთიანება

const createText = (words) => {
    let text = words.join(" ");

    if (text.length > 10) {
        console.log(text);
    } else {
        console.log("ტექსტი ძალიან მოკლეა");
    }
};

createText(["მე", "ვსწავლობ", "javascript-ს"]);


// 6. ელემენტის ძებნა და ინდექსი

let cities = ["ბათუმი", "თბილისი", "ქუთაისი"];

const findCity = (city) => {
    if (cities.includes(city)) {
        let index = cities.indexOf(city);
        console.log("ქალაქის ინდექსია:", index);
    } else {
        console.log("ქალაქი ვერ მოიძებნა");
    }
};

findCity("თბილისი");