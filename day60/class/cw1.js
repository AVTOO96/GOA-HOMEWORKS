let numbers = [10, -5, 20, -3, 30, -12]

let newArray = []

for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0){
       newArray.push(numbers[i]);
    } else {
        console.log(numbers[i]) + "waishala"

    }
}

console.log(newArray)