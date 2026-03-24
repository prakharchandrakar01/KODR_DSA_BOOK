//Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

[a, b] = [b, a];

console.log("After swapping:");
console.log("a:", a);
console.log("b:", b);