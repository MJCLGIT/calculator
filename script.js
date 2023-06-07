let calculatorDisplay = document.getElementById('displayHeading');
let numberButton = document.getElementsByClassName('numberButtons');
let operatorButton = document.getElementsByClassName("operatorButtons"); 
let equalsButton = document.getElementById("equalsButton");
// operator accessible globally, pulled from local event listener
let globalOperator = null;
// number accessible globally, pulled from local event listener
let globalNumber = null;

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply (num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide (num1, num2) {
    let result = num1 / num2;
    return result;
}

function operate (globalOperator, num1, num2) {
    if (globalOperator === "+"){
        return add(num1, num2);
    }
    else if (globalOperator === "-"){
        return subtract(num1, num2);
    }
    else if (globalOperator === "*"){
        return multiply(num1, num2);
    }
    else if (globalOperator === "/"){
        return divide(num1, num2);
    }
}

// add event listener to each operator button
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', function(){
        const symbol = operatorButton[i].textContent;
            // clear display if 'clear' button is clicked
            if (symbol === 'Clear') {
                calculatorDisplay.innerHTML = '0';
                globalOperator = null;
                globalNumber = null;
            }
            else {
                // Check if there is an existing operator and number
                if (globalOperator) {
                    const num1 = parseFloat(globalNumber);
                    const num2 = parseFloat(calculatorDisplay.innerHTML);
                    const result = operate(globalOperator, num1, num2);
                    calculatorDisplay.innerHTML = result;
                    globalNumber = result;
                    globalOperator = symbol;
            }
            else {
                calculatorDisplay.innerHTML = symbol;
                globalOperator = symbol;
            }
        }
    });
}

// add event listener to each number button
for (let i = 0; i < numberButton.length; i ++) {
    numberButton[i].addEventListener('click', function(){
        const number = numberButton[i].textContent;
        if (calculatorDisplay.innerHTML === '0') {
            calculatorDisplay.innerHTML = number;
        } else {
            calculatorDisplay.innerHTML += number;
        }
        globalNumber = calculatorDisplay.innerHTML;
    });
}

// add event listener to the equals button
equalsButton.addEventListener('click', function () {
    if (globalOperator && globalNumber) {
        console.log('globalNumber:', globalNumber);
        console.log('calculatorDisplay.innerHTML:', calculatorDisplay.innerHTML);
        const num1 = parseFloat(globalNumber);
        const num2 = parseFloat(calculatorDisplay.innerHTML.trim());
        console.log('globalOperator:', globalOperator);
        console.log('num1:', num1);
        console.log('num2:', num2);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Invalid numbers');
            return;
        }
        const result = operate(globalOperator, num1, num2);
        console.log('result:', result);
        calculatorDisplay.innerHTML = result.toString();
        globalNumber = result.toString();
        globalOperator = null;
    }
});