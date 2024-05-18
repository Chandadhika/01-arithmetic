// Fill in the body of each function with the code required

// var add = function(num1, num2) {};

// var subtract = function(num1, num2) {};

// var multiply = function(num1, num2) {};

// var divide = function(num1, num2) {};


var add = function(num1, num2) {
    return num1 + num2;
};

var subtract = function(num1, num2) {
    return num1 - num2;
};

var multiply = function(num1, num2) {
    return num1 * num2;
};

var divide = function(num1, num2) {
    // Check if num2 is zero to avoid division by zero error
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return num1 / num2;
};