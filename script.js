const resultDisplay = document.querySelector('.result');
const calculatorButtons = document.querySelectorAll('ul li');

let calculation = '';

calculatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Allow only valid inputs: 0-9, operators, Enter, and Backspace
    if (/^[0-9\.\+\-\*\/\n]$/.test(key)) {
        handleButtonClick(key);
    }
});

function handleButtonClick(buttonValue) {
    if (buttonValue === '=') {
        try {
            calculation = eval(calculation);
        } catch (error) {
            calculation = 'Error';
        }
    } else if (buttonValue === 'c') {
        calculation = '';
    } else if (buttonValue === '←') {
        calculation = calculation.slice(0, -1);
    } else {
        calculation += buttonValue;
    }

    resultDisplay.textContent = calculation;
}
