let prices = [10, 25, 40, 15, 30];

let total = 0;

prices.forEach((price) => {
    let newPrice = price * 1.18;

    console.log(newPrice);

    total += newPrice
});

console.log(total);
