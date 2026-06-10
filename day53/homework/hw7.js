let promoCode = "SAVE10";

let discount = promoCode === "SAVE10"
    ? 10
    : promoCode === "SAVE20"
    ? 20
    : 0;

console.log(discount);