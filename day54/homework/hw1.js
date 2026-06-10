function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;

    console.log(dice);

    dice === 5 || dice === 6
        ? console.log("მოიგე!")
        : console.log("წააგე!");
}

rollDice();