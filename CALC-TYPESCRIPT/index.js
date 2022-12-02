"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firststr = (0, readline_sync_1.question)('enter first number:\n');
    var operator = (0, readline_sync_1.question)('enter operator:\n');
    var secondstr = (0, readline_sync_1.question)('enter second string\n');
    var validInput = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    if (validInput) {
        console.log('is valid.');
        var firstNum = parseInt(firststr);
        var secondNum = parseInt(secondstr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
