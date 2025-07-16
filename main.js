
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.keypad button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'C') {
            display.textContent = '';
            num1 = num2 = operator = undefined;
        } else if (value === '=') {
            if (num1 !== undefined && num2 !== undefined && operator) {
                const result = operate(num1, num2, operator);
                display.textContent = result;
                num1 = result; // Store result for further operations
                num2 = operator = undefined; // Reset for next operation
            }
        } else if (['+', '-', '*', '/', '^'].includes(value)) {
            if (num1 === undefined) {
                num1 = parseFloat(display.textContent);
            } else if (num2 === undefined) {
                num2 = parseFloat(display.textContent);
            }
            operator = value;
            display.textContent = ''; // Clear display for next number
        } else {
            display.textContent += value; // Append number to display
        }
    });
});
