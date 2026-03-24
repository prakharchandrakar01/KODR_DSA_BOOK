//Accept three numbers and print the greatest among them
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));
if (num1 >= num2 && num1 >= num3) {
    console.log("The greatest number is:",num1);
}
 else if (num2 >= num1 && num2 >= num3) {
        console.log("The greatest number is:", num2);
    }
 else {
        console.log("The greatest number is:", num3);
    } 