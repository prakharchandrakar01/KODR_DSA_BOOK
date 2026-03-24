//Accept the three sides of triangle and calculate the area using Heron's formula
let a = Number(prompt(" the first side of the triangle:"));
let b = Number(prompt(" the second side of the triangle:"));
let c = Number(prompt(" the third side of the triangle:"));
let s = (a + b + c) / 2; // Semi-perimeter

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("The area of the triangle is: ", area);




