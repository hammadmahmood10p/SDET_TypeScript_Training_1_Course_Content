"use strict";
// Section 1: Basic Function Declarations and Types
function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(calculateGrade(85)); // Output: B
// Section 2: Function with Optional Parameters
function calculateDiscount(price, discount = 10) {
    return price - (price * discount) / 100;
}
// Usage
console.log(calculateDiscount(100)); // Output: 90
console.log(calculateDiscount(100, 20)); // Output: 80
function getArea(value1, value2) {
    if (value2 === undefined) {
        // Circle area
        return Math.PI * value1 * value1;
    }
    else {
        // Rectangle area
        return value1 * value2;
    }
}
// Usage
console.log(getArea(5)); // Circle: Output: 78.53981633974483
console.log(getArea(4, 6)); // Rectangle: Output: 24
function printTestCaseDetails(testCase) {
    console.log(`Test Case ID: ${testCase.id}`);
    console.log(`Test Case Name: ${testCase.name}`);
    console.log(`Status: ${testCase.status}`);
}
// Usage
const exampleTestCase = { id: 1, name: "Login Test", status: "pass" };
printTestCaseDetails(exampleTestCase);
// Output:
// Test Case ID: 1
// Test Case Name: Login Test
// Status: pass
// Section 5: Function Returning a Promise
function fetchTestData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Login Test', 'Signup Test', 'Logout Test']);
        }, 1000);
    });
}
// Usage
fetchTestData().then((data) => console.log(data));
// Output after 1 second: ["Login Test", "Signup Test", "Logout Test"]
// Section 6: Recursive Function
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
// Usage
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
// Section 7: Higher-Order Functions
function applyOperation(numbers, operation) {
    return numbers.reduce(operation);
}
// Usage
const numbers = [1, 2, 3, 4];
console.log(applyOperation(numbers, (a, b) => a + b)); // Output: 10 (Sum)
console.log(applyOperation(numbers, (a, b) => a * b)); // Output: 24 (Product)
// Section 8: Arrow Functions
const isEven = (num) => num % 2 === 0;
const numbers_arr = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers_arr.filter(isEven);
console.log(evenNumbers); // Output: [2, 4, 6]
// Section 9: Function with Rest Parameters
function logTestResults(...results) {
    results.forEach((result, index) => {
        console.log(`Test ${index + 1}: ${result}`);
    });
}
// Usage
logTestResults("Pass", "Fail", "Skipped");
function calculateArea(length, width) {
    if (width == undefined) {
        return length * length; // Square
    }
    return length * width; // Rectangle
}
console.log(calculateArea(4)); // Output: 16 (Square)
console.log(calculateArea(4, 5)); // Output: 20 (Rectangle)
