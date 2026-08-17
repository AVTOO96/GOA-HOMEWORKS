// 1. კენტების ჯამი

const sumOddNumbers = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            sum += numbers[i];
        }
    }

    return sum;
};

console.log(sumOddNumbers([1, 2, 3, 4, 5, 6]));


// 2. ყველაზე დიდი რიცხვის ძებნა

let numbers = [10, 25, 7, 50, 15];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("ყველაზე დიდი რიცხვია:", max);


// 3. რიცხვის განმეორების დათვლა

const countNumber = (numbers, searchNumber) => {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === searchNumber) {
            count++;
        }
    }

    return count;
};

console.log(countNumber([5, 2, 5, 3, 5, 1], 5));


// 4. ელემენტების შებრუნება Reverse-ის გარეშე

let array = [1, 2, 3, 4, 5];

let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray);


// 5. მასივის გაორმაგება

const doubleArray = (numbers) => {

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2;
    }

    return numbers;
};

console.log(doubleArray([2, 4, 6, 8]));


// 6. დადებითი და უარყოფითი რიცხვების რაოდენობა

let nums = [-3, 5, 0, -1, 12, -8, 4];

let positiveCount = 0;
let negativeCount = 0;

for (let i = 0; i < nums.length; i++) {

    if (nums[i] > 0) {
        positiveCount++;
    } else if (nums[i] < 0) {
        negativeCount++;
    }

}

console.log("დადებითი:", positiveCount);
console.log("უარყოფითი:", negativeCount);