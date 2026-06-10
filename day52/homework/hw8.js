let temperature = Number(prompt("შეიყვანე ტემპერატურა:"));

if (Math.sign(temperature) === -1 || temperature > 40) {
    console.log("ექსტრემალური ტემპერატურა");
} else {
    console.log("ნორმალური ტემპერატურა");
}