
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.keypad button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'AC') {
            display.textContent = '';
        }
         else if (value === 'percent') {
            display.textContent = parseFloat(display.textContent) / 100;
        } 
        else if (value === 'power') {
            display.textContent += '**';
        }
        else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Math Error';
            }
        } 
        else if (value === 'del') {
            display.textContent = display.textContent.toString().slice(0, -1);
        }
        else {
            display.textContent += value;
        }
    });
});

const delButton = document.getElementById('del');
delButton.addEventListener('mousedown', startPress);
delButton.addEventListener('mouseup', endPress);
function startPress(e) {
    e.preventDefault();
    pressTimer = setTimeout(() => {
        display.textContent = '';
    }, 500);
}
function endPress() {
    clearTimeout(pressTimer);
    display.textContent = display.textContent.toString().slice(0, -1);
}
function  cancelPress() {
    clearTimeout(pressTimer);
}