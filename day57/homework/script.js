// 1. shift და unshift (სასწრაფო დახმარება)

let patients = ["პაციენტი 1", "პაციენტი 2"];

patients.unshift("კრიტიკული პაციენტი");

patients.shift();

console.log(patients);


// 2. concat (ორი კლასის გაერთიანება)

let classA = ["ანი", "გიორგი"];
let classB = ["ლუკა", "ნინო"];

let allStudents = classA.concat(classB);

console.log(allStudents);


// 3. flat (ყუთები ყუთში)

let numbers = [1, 2, [3, 4]];

let flatNumbers = numbers.flat();

console.log(flatNumbers);


// 4. join (URL ტეგის შექმნა)

let tags = ["javascript", "programming", "web"];

let url = tags.join("-");

console.log(url);


// 5. slice (საუკეთესო სამეული)

let runners = ["ნიკა", "ლაშა", "სანდრო", "გიორგი", "დათო"];

let topThree = runners.slice(0, 3);

console.log(topThree);

console.log(runners); // ორიგინალი უცვლელია


// 6. includes (სასტუმროს ჯავშანი)

let guests = ["ანი", "ლუკა", "საბა"];

if (guests.includes("ლუკა")) {
    console.log("მოგესალმებით!");
}