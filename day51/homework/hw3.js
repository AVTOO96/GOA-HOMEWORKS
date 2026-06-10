let price = Number(prompt("შეიყვანე პროდუქტის ფასი:"));

let discountedPrice = Math.round(price * 0.85);

if (discountedPrice > 50) {
    console.log("ძვირია");
} else {
    console.log("მისაღები ფასია");
}