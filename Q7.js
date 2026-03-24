//Accept the length and width of a rectangle. Calculate & print the area and perimeter.
let length = Number(prompt("Enter the length of the rectangle:"));
let width = Number(prompt("Enter the width of the rectangle:"));

let area = length * width;
let perimeter = 2 * (length + width);
console.log("Area of the rectangle: ", area);
console.log("Perimeter of the rectangle: ", perimeter);