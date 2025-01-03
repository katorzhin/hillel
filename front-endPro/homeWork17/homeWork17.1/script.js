class Calculator {

    add(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    subtract(firstNum, secondNum) {
        return firstNum - secondNum;
    }

    multiply(firstNum, secondNum) {
        return firstNum * secondNum;
    }

    divide(firstNum, secondNum) {
        if (secondNum === 0) {
            return "Error: division by zero";
        }
        return firstNum / secondNum;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4