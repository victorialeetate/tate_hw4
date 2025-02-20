console.log("Victoria Tate's Output from Example 1");

function calculate(n1, n2, op) {
    if (op === "+") return `${n1} + ${n2} = ${n1 + n2}`;
    else if (op === "-") return `${n1} - ${n2} = ${n1 - n2}`;
    else if (op === "*") return `${n1} * ${n2} = ${n1 * n2}`;
    else if (op === "/") return `${n1} / ${n2} = ${n1 / n2}`;
}

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operator = prompt("Enter a mathematical operation (+, -, *, /):");

console.log(calculate(num1, num2, operator));