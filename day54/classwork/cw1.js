
function getAverage(scores) {
  let sum = scores.reduce((acc, num) => acc + num, 0);
  return sum / scores.length;
}

const getScores = function () {
  let scores = [];

  for (let i = 1; i <= 5; i++) {
    scores.push(Number(prompt(`შეიყვანე ${i}-ე ქულა:`)));
  }

  return scores;
};

const displayResult = (average) => {
  console.log(`საშუალო ქულაა: ${average}`);
};

let scores = getScores();
let average = getAverage(scores);
displayResult(average);
