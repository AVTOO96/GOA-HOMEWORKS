// 1. მეგობრების წვეულება (Arrow Function + Default Parameters + OR)

const canEnter = (isInList = false, hasGift = false) => {
  return isInList || hasGift ? "შესვლა შეიძლება" : "შესვლა აკრძალულია";
};

console.log(canEnter(true));
console.log(canEnter(false, true));
console.log(canEnter());


// 2. ფასდაკლების გამოთვლა (Anonymous Function + Switch)

const getDiscount = function(cardType) {
  switch(cardType) {
    case "Gold":
      return "30% ფასდაკლება";
    case "Silver":
      return "20% ფასდაკლება";
    case "Bronze":
      return "10% ფასდაკლება";
    default:
      return "ფასდაკლება არ არის";
  }
};

console.log(getDiscount("Gold"));


// 3. ფარული რიცხვის კალკულატორი (Math + Prompt + Ternary)

let userNumber = Number(prompt("შეიყვანე რიცხვი 1-დან 5-მდე"));

let hiddenNumber = Math.floor(Math.random() * 5) + 1;

const compareNumber = (num) => {
  return num > hiddenNumber ? "შენი რიცხვი მეტია" : "შენი რიცხვი ნაკლებია ან ტოლია";
};

console.log("ფარული რიცხვი:", hiddenNumber);
console.log(compareNumber(userNumber));


// 4. მინიმალური ასაკის შემოწმება (Arrow Function + Default Parameters + Ternary)

const canDrive = (age, minAge = 18) => {
  return age >= minAge ? "შეგიძლია მანქანის მართვა" : "ვერ მართავ";
};

console.log(canDrive(20));
console.log(canDrive(16));


// 5. სმარტფონის ელემენტის სტატუსი (Anonymous Function + AND + Ternary)

const batteryStatus = function(battery, isCharging) {
  return battery < 20 && !isCharging
    ? "ჩაირთო ენერგიის დამზოგავი რეჟიმი"
    : "ჩვეულებრივი რეჟიმი";
};

console.log(batteryStatus(15, false));


// 6. ფეხბურთის მატჩის პროგნოზი (Switch + Math)

function matchPrediction() {
  let result = Math.floor(Math.random() * 3);

  switch(result) {
    case 0:
      return "წაგება";
    case 1:
      return "ფრე";
    case 2:
      return "მოგება";
  }
}

console.log(matchPrediction());


// 7. სასტუმროს ნომრის დაჯავშნა (Arrow Function + Default Parameters + Switch)

const roomPrice = (room = "standard") => {
  switch(room) {
    case "standard":
      return "Standard ოთახი - 100 ლარი";
    case "suite":
      return "Suite ოთახი - 250 ლარი";
    default:
      return "Standard ოთახი - 100 ლარი";
  }
};

console.log(roomPrice());
console.log(roomPrice("suite"));


// 8. ონლაინ გამოცდის ქულა (Anonymous Function + Nested Ternary)

const grade = function(score) {
  return score > 90
    ? "A"
    : score > 70
    ? "B"
    : "F";
};

console.log(grade(95));
console.log(grade(75));
console.log(grade(50));