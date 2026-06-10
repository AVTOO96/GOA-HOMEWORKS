function roundNumber(num) {
    let result = num % 1 >= 0.5
        ? Math.ceil(num)
        : Math.floor(num);

    console.log(result);
}

roundNumber(7.8);