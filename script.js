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

function operate (operator, num1, num2) {
    if (opertor === "+"){
        return add(num1, num2);
    }
    else if (operator === "-"){
        return subtract(num1, num2);
    }
    else if (operator === "*"){
        return multiply(num1, num2);
    }
    else if (operator === "/"){
        return divide(num1, num2);
    }
}

let calculatorDisplay = document.getElementById('displayHeading');
let numberSelection = document.getElementsByClassName('numberButtons');
let operatorButton = document.getElementsByClassName("operatorButtons"); 

// clear display


// add event listener to each operator button
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', function(){
        const symbol = operatorButton[i].textContent;
        console.log('Operator Clicked:', symbol);
            // clear display if 'clear' button is clicked
            if (symbol === 'Clear') {
                calculatorDisplay.innerHTML = '';
            }
    });
}